// @flow
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import React from 'react';
import slack from './images/slack_icon.png';
import './index.css';

import store from './store';

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
  'angry',
  'sad',
  'disappointed',
  'neutral',
  'smile',
  'happy',
];

type Props = {
  color: string,
  isShowingScores: boolean,
  score: mixed,
};

export default class Toolbar extends React.Component {
  props: {
    color: string,
    isShowingScores: boolean,
    score: mixed,
  };

  componentWillMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const { color, score, isShowingScores } = this.props;
    const menuClasses = `ui ${color} inverted menu`;
    const hasValidScore = parseInt(score, 10) < scoreToEmoji.length;

    const currentEmoji =
      (!isShowingScores || !hasValidScore) ?
      scoreToEmoji[3] :
      scoreToEmoji[parseInt(score, 10)];
    return (
      <Menu size="small" className={menuClasses}>
        <Menu.Item className="ui button">
          <Image avatar src={slack} />
        </Menu.Item>
        <Dropdown item text="Channel name">
          <Dropdown.Menu>
            {Object.keys(store.getState().channelData).map(
              channel => <Dropdown.Item key={channel}>{channel}</Dropdown.Item>,
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
