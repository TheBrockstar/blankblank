import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, unmount } from 'enzyme';
import ReviewPage from './index';
import { Stars } from './Styles';

describe ('ReviewPage', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    expect(shallow(<ReviewPage />)).toMatchSnapshot();
  });

  describe('Stars Styled Component', () => {
    it('renders with a width proportionate to the rating prop passed to it', () => {
      const wrapper = mount(<Stars rating={'3.1'}/>);
      expect(((wrapper.props().rating / 5) * 100) + "%").toEqual('62%');
      wrapper.unmount();
    });
  
  })

});