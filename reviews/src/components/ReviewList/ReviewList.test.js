import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, unmount } from 'enzyme';
import ReviewList from './index';
import List from './List';
import Toolbar from './Toolbar';
import ReviewCard from './ReviewCard';
import { Stars } from './Styles';

describe ('ReviewList', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    expect(shallow(<ReviewList />)).toMatchSnapshot();
  });

  describe('Stars Styled Component', () => {
    it('renders with a width proportionate to the rating prop passed to it', () => {
      const wrapper = mount(<Stars rating={'3.1'}/>);
      expect(((wrapper.props().rating / 5) * 100) + "%").toEqual('62%');
      wrapper.unmount();
    });
  
  })

  describe('List', () => {
    it('matches snapshot', () => {
      expect(shallow(<List />)).toMatchSnapshot();
    });
  })

  describe('Toolbar', () => {
    it('matches snapshot', () => {
      expect(shallow(<Toolbar />)).toMatchSnapshot();
    });
  });

  describe('ReviewCard', () => {

  const mockReview = {
      rating: 4.1,
      publish_date: "2016-09-03T23:25:47.642545Z",
      id: "9784620626604",
      body: "How bitter a thing it is to look into happiness through another man's eyes!",
      author: "Tatyana Olson"
  }

    it('matches snapshot', () => {
      expect(shallow(<ReviewCard review={mockReview}/>)).toMatchSnapshot();
    });
  });

});
