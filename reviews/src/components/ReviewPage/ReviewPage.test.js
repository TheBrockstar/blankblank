import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReviewPage from './index';

describe ('ReviewPage', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    expect(shallow(<ReviewPage />)).toMatchSnapshot();
  });

});