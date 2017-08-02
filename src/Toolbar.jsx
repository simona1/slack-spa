// @flow
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import React from 'react';
import './index.css';

function Toolbar() {
  return (
    <Menu size="small" className="ui teal inverted menu">
      <Menu.Item className="ui button">
        <Icon name="slack" className="slack icon large" />
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
          <Icon name="smile" className="smile icon large" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Toolbar;
