// @flow

import React from 'react';
import { Image, List } from 'semantic-ui-react';
import type { MessageType } from './store';

export default function Message(
  { avatarImage, name, text, timestamp }: MessageType,
) {
  return (
    <List.Item className="listItem">
      <Image avatar src={avatarImage} />
      <List.Content>
        <List.Header>
          {`${name}, ${timestamp}`}
          <List.Description>
            {text}
          </List.Description>
        </List.Header>
      </List.Content>
    </List.Item>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     selectedChannel: state.selectedChannel,
//     score: state.scoreData[state.selectedChannel],
//     channelData: state.channelData,
//
//   }
// };
// const selectChannel = Actions.selectChannel;
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({selectChannel}, dispatch);
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Message)
