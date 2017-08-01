// @flow

import React from 'react';
import { Image, List } from 'semantic-ui-react';

function MessageList() {
  return (
    <List celled >
      <List.Item className="listItem">
        <Image
          avatar
          src="http://semantic-ui.com/images/avatar2/small/lena.png"
        />
        <List.Content >
          <List.Header> Lena Dunham</List.Header>
          <List.Description>
            I refresh Twitter as thoughtlessly as some twirl their hair.
          </List.Description>
        </List.Content>
      </List.Item>

      <List.Item className="listItem">
        <Image
          avatar
          src="http://semantic-ui.com/images/avatar2/small/matthew.png"
        />
        <List.Content>
          <List.Header>Matthew McConaughey</List.Header>
          <List.Description>
            {`There ain't nothin' more dangerous in this world
            than a fool with a cause...`}
          </List.Description>
        </List.Content>
      </List.Item>


      <List.Item className="listItem">
        <Image
          avatar
          src="http://semantic-ui.com/images/avatar2/small/rachel.png"
        />
        <List.Content>
          <List.Header> Rachel Brosnahan</List.Header>
          <List.Description>
            I was under the false impression
            that I could sing in high school,
            so I did a lot of musical stuff.
          </List.Description>
        </List.Content>
      </List.Item>

      <List.Item className="listItem">
        <Image
          avatar
          src="http://semantic-ui.com/images/avatar/large/jenny.jpg"
        />
        <List.Content>
          <List.Header>Jennifer Lawrence</List.Header>
          <List.Description>
            I volunteer! - I gasp. I volunteer as tribute!
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item className="listItem">
        <Image
          avatar
          src="http://semantic-ui.com/images/avatar/large/stevie.jpg"
        />
        <List.Content>
          <List.Header>Stevie Nicks</List.Header>
          <List.Description>
            I am not a good terrified person.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item className="listItem">
        <Image
          avatar
          src="http://semantic-ui.com/images/avatar/large/justen.jpg"
        />
        <List.Content>
          <List.Header>Justin Timberlake</List.Header>
          <List.Description>
            I got sunshine in my pocket.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
}

export default MessageList;
