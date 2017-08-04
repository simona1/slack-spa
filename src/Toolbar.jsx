// @flow
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import React from 'react';
import slack from './images/slack_icon.png';
import smile from './images/emojis/smile.jpg';
import './index.css';

type Props = {
  color: string,
}

export default function Toolbar({ color }: Props) {
  const menuClasses = `ui ${color} inverted menu`;
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
          <Image avatar src={smile} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
