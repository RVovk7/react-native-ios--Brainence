import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authCheck} from '../modules/auth';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
 class Login extends Component {
  static propTypes = {
    auth: PropTypes.func.isRequired,
  };
  constructor(props) {
    
    super(props)
    this.state = {
      logID: '',
    }
  }
componentWillReceiveProps(nextProps){
  if (nextProps.authStatus.auth){
  this.props.navigation.navigate('GalleryScreen');
  this.setState({
    logID: '',
  })
  } 
}

  logClick = () => {
    const { props: { auth }, state: {logID }} = this;
    auth(logID);
  }
  render() {
    return (
      <View style={styles.logMain}>
        <Text style={styles.logLabel}> Enter your ID </Text>
        <TextInput style={styles.logInput}
          style={styles.logInput}
          onChangeText={(logID) => this.setState({ logID })}
          value={this.state.logID}
        />
        <Button
  onPress={this.logClick}
  title="Sign In"
  color="black"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  logMain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logLabel: {
   fontSize: 25,
   marginBottom: 10,
  },
  logInput: {
    height: 40,
     width: 150,
     borderRadius: 5,
      borderColor: 'gray',
       borderWidth: 1, 
       marginBottom: 10,
  }
});
const mapStateToProps = (state = []) => {
  return {
   authStatus: state.authReducer
  };
};
const mapDispatchToProps = dispatch => ({
  auth: id => dispatch(authCheck(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
