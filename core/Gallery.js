import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Head from '../components/Head';
export class Gallery extends Component {
  static propTypes = {
    user: PropTypes.string,
  }
  logoutClick = () => {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <Head user={user} logoutClick={this.logoutClick}  />
      </Fragment>
    )
  }
}

const mapStateToProps = (state = []) => {
  return {
    user: state.authReducer.data.username
  };
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
