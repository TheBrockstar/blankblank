import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, unmount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import App from './index';
import View from './View';
import Footer from './Footer';
import Header from './Header';
import { NotFound404 } from '../../globalStyles/Styles';
import ReviewList from '../ReviewList';
import ReviewPage from '../ReviewPage';

describe ('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

});


describe ('View', () => {
  it('matches snapshot', () => {
    expect(shallow(<View />)).toMatchSnapshot();
  });
});

describe ('Header', () => {
  it('matches snapshot', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});

describe ('Footer', () => {
  it('matches snapshot', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});

describe ('Routes', () => {

  it('Render `ReviewList` if path is `/`', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={[{pathname:"/"}]} initialIndex={0}>
        <View />
      </MemoryRouter>
    );

    expect(
      wrapper.find(ReviewPage)
    ).toHaveLength(0);
    expect(
      wrapper.find(NotFound404)
    ).toHaveLength(0);
    expect(
      wrapper.find(ReviewList)
    ).toHaveLength(1);

    
  wrapper.unmount();
  });

  it('Render `NotFound404` if path is invalid.', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={[{pathname:"/incorrect"}]} initialIndex={0}>
        <Switch>
          <Route exact path="/" render={props => <ReviewList { ...props } />}/>
          <Route path="/review/:id" render={props => (<ReviewPage  { ...props }/>)}/>
          <Route path="/" render={_ => 
            (<NotFound404>404 - Not Found <br/> Get Thee Hence!</NotFound404>)}
            />
        </Switch>
      </MemoryRouter>
    );

    expect(
      wrapper.find(ReviewPage)
    ).toHaveLength(0);
    expect(
      wrapper.find(NotFound404)
    ).toHaveLength(1);
    expect(
      wrapper.find(ReviewList)
    ).toHaveLength(0);

    
  wrapper.unmount();
  });

  it('Render `ReviewPage` if path matches `/review/:id`', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={[{pathname:"/review/12345"}]} initialIndex={0}>
        <Switch>
          <Route exact path="/" render={props => <ReviewList { ...props } />}/>
          <Route path="/review/:id" render={props => (<ReviewPage  { ...props }/>)}/>
          <Route path="/" render={_ => 
            (<NotFound404>404 - Not Found <br/> Get Thee Hence!</NotFound404>)}
            />
        </Switch>
      </MemoryRouter>
    );

    expect(
      wrapper.find(ReviewPage)
    ).toHaveLength(1);
    expect(
      wrapper.find(NotFound404)
    ).toHaveLength(0);
    expect(
      wrapper.find(ReviewList)
    ).toHaveLength(0);

    
  wrapper.unmount();
  });


});
