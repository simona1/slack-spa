// @flow

import { Dropdown, Image, Menu } from 'semantic-ui-react';
import React from 'react';
import slack from './images/slack_icon.png';
import './index.css';
import store from './store';
import Actions from './Actions';

function importAll(r) {
  return r.keys().reduce(
    (map, path) => {
      map[path.replace('./', '')] = r(path);
      return map;
    },
    {},
  );
}

const images = importAll(
  (require: any).context('./images/emojis', false, /\.(png|jpg)$/),
);

const emojis = Object.keys(images).reduce(
  (map, path) => {
    map[path.replace(/\.(png|jpg)$/, '')] = path;
    return map;
  },
  {},
);

const scoreToEmoji =
  [
    'frustrated',
    'sad',
    'neutral',
    'smile',
    'happy',
  ];

export default class Toolbar extends React.Component {
  componentWillMount() {
    const channels = Object.keys(store.getState().channelData);
    if (channels.length === 0) {
      store.dispatch(Actions.fetchChannels());
    }

    store.subscribe(() => this.forceUpdate());
  }

  props: {
    color: string,
    isShowingScores: boolean,
    score: mixed,
  };

  render() {
    const { color, score, isShowingScores } = this.props;
    const menuClasses = `ui ${color} inverted menu`;
    const hasValidScore = parseInt(score, 10) < scoreToEmoji.length;

    const currentEmoji =
      (!isShowingScores || !hasValidScore) ?
      scoreToEmoji[3] :
      scoreToEmoji[parseInt(score, 10)];
    const {selectedChannel} = store.getState();
    return (
      <Menu size="small" className={menuClasses}>
        <Menu.Item className="ui button">
          <Image avatar src={slack} />
        </Menu.Item>
        <Dropdown item text={selectedChannel || 'Select a channel'}>
          <Dropdown.Menu>
            {Object.keys(store.getState().channelData).map(
              channel =>
                <Dropdown.Item
                  key={channel}
                  onClick={() => store.dispatch(Actions.selectChannel(channel))}
                  selected={channel === selectedChannel}>
                  {channel}
                </Dropdown.Item>,
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Menu.Item className="ui button">
            <Image
              avatar
              src={images[emojis[currentEmoji]]}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
