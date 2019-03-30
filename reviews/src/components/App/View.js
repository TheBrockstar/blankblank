import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ViewWrapper } from './Styles';
import ReviewList from '../ReviewList';

const View = _ => {
  return (
    <main>
      <ViewWrapper>
          <Router>
            <Route exact path="/" component={ReviewList}/>
            <Route path="/other" render={_ => (<h1>Other Content</h1>)}/>
          </Router>
      </ViewWrapper>
    </main>
  )
}

export default View;