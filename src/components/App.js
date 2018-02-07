import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import GoogleMap from './GoogleMap';
import Map from './Map';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  //functional to class based app to call an action creator one time to fetch user

  componentDidMount() {
    this.props.fetchUser();
  } //lifecycle method to fetch current user

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/map/cities" component={Map} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App); //connects the app state/redux to the app itself
