import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ViewWrapper } from './Styles';

const View = _ => {
  return (
    <ViewWrapper>
      <main>
        <Router>
          <Route exact path="/" render={_ => (<h1>Content</h1>)}/>
          <Route path="/other" render={_ => (<h1>Other Content</h1>)}/>
        </Router>
      </main>
    </ViewWrapper>
  )
}

export default View;