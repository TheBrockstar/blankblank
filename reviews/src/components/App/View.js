import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewWrapper } from './Styles';
import { NotFound404 } from '../../globalStyles/Styles';
import ReviewList from '../ReviewList';
import ReviewPage from '../ReviewPage';

const View = _ => {
  return (
    <main>
      <ViewWrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={ReviewList}/>
              <Route path="/review/:id" render={props => (<ReviewPage  { ...props }/>)}/>
              <Route path="/" render={_ => 
                (<NotFound404>404 - Not Found <br/> Get Thee Hence!</NotFound404>)}
                />
            </Switch>
          </Router>
      </ViewWrapper>
    </main>
  )
}

export default View;