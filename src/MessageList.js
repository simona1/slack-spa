
import { List, Item } from 'semantic-ui-react';
import React, { Component } from 'react';

export default class MessageList extends Component {
  render() {
    return (
      <List aligned="middle" celled="divided">
        <Item
        image="http://semantic-ui.com/images/avatar2/small/lena.png" imageType="image" >
            Lena
        </Item>
        <Item image="http://semantic-ui.com/images/avatar2/small/lena.png" imageType="image" >
            Ann
        </Item>
        <Item image="http://semantic-ui.com/images/avatar2/small/lena.png" imageType="image" >
            Mike
        </Item>
      </List>
    );
  }
}
