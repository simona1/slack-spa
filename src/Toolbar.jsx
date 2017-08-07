// @flow
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import React from 'react';
import slack from './images/slack_icon.png';
import './index.css';

function importAll(r) {
  return r.keys().reduce(
    (map, path) => {
      map[path.replace('./', '')] = r(path);
      return map;
    },
    {}
  );
}

const images = importAll(
  (require: any).context('./images/emojis', false, /\.(png|jpg)$/)
);

const emojis = Object.keys(images).reduce(
  (map, path) => {
    map[path.replace(/\.(png|jpg)$/, '')] = path;
    return map;
  },
  {}
);

const scoreToEmoji = {
  '1': 'angry',
  '2': 'sad',
  '3': 'disappointed',
  '4': 'neutral',
  '5': 'smile',
  '6': 'happy',
};

type Props = {
  color: string,
  scoreStatus: boolean,
  score: mixed,
};

export default function Toolbar({ color, score, scoreStatus }: Props) {
  const menuClasses = `ui ${color} inverted menu`;

  const currentEmoji =
    !score ? scoreToEmoji[4] : scoreToEmoji[parseInt(score, 10)];
  return (
    <Menu size="small" className={menuClasses}>
      <Menu.Item className="ui button">
        <Image avatar src={slack} />
      </Menu.Item>
      <Dropdown item text="Channel name">
        <Dropdown.Menu>
          <Dropdown.Item>Team 1</Dropdown.Item>
          <Dropdown.Item>Team 2</Dropdown.Item>
          <Dropdown.Item>Team 3</Dropdown.Item>
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
