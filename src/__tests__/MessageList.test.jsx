import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MessageList from '../MessageList';

describe('Renders message list', () => {
  it('should render an empty message list', () => {
    const messageList = shallow(<MessageList />);
    expect(toJson(messageList)).toMatchSnapshot();
  });
});
