import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MessageList from '../MessageList';
import messages from '../messages.json';

describe('Renders message list', () => {
  it('should render an empty message list', () => {
    const messageList = shallow(<MessageList />);
    expect(toJson(messageList)).toMatchSnapshot();
  });
  it('should render a non-empty message list', () => {
    const messageList = shallow(<MessageList messages={messages} />);
    expect(toJson(messageList)).toMatchSnapshot();
  });
});
