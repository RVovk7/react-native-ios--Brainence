import React, { Component, Fragment } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Login from './Login';
import Gallery from './Gallery';
const LogNavigate = createSwitchNavigator(
  {
    LoginScreen: Login,
    GalleryScreen: Gallery,
  },
  {
    initialRouteName: 'LoginScreen',
  }
);
export default class Navigate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: false
    }
  }
  render() {
    return (
      <Fragment>
        <LogNavigate />
      </Fragment>
    );
  }
}


