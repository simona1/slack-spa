// @flow
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import React from 'react';
import slack from './images/Slack_Icon.png';
import smile from './images/smile.jpg';
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
<<<<<<< HEAD
          <Image avatar src={smile} />
=======
          <Icon name="smile" className="smile icon large" />
>>>>>>> 20fe7fcfe5c5db8c017cf09dd72d66563ef07969
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
<<<<<<< HEAD
=======

export default Toolbar;
>>>>>>> 20fe7fcfe5c5db8c017cf09dd72d66563ef07969
