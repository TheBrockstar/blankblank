import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReviewList from './index';

describe ('ReviewList', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    expect(shallow(<ReviewList />)).toMatchSnapshot();
  });

});