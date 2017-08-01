import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Toolbar from '../Toolbar';

describe('Renders toolbar', () => {
  it('should render a toolbar', () => {
    const toolbar = shallow(<Toolbar />);
    expect(toJson(toolbar)).toMatchSnapshot();
  });
});
