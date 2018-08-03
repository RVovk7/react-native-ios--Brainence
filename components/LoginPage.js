import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TextInput, Button, AlertIOS } from 'react-native';

export default class LoginPage extends Component {
    static propTypes = {
        auth: PropTypes.func.isRequired,
      };

    constructor(props) {
    
        super(props)
        this.state = {
          logID: '',
        }
      }

    logClick = () => {
        const { props: { auth }, state: {logID }} = this;
        auth(logID);
      }
      loginInput = e => {
          if (!isNaN(+e)){
              this.setState({
                  logID: e,
              })
          }
      }
    render(){
        const { state : {logID}, logClick, loginInput} = this;
        return (
            <View style={styles.logMain}>
            <Text style={styles.logLabel}> Enter your ID </Text>
            <TextInput style={styles.logInput}
              style={styles.logInput}
              onChangeText={loginInput}
              value={logID}
            />
            <Button
                onPress={logClick}
                title="Sign In"
                color="black"
                accessibilityLabel="loginButton"
        />
          </View>
        
          )
    }
 
}
LoginPage.propTypes = {
    controledInput: PropTypes.func,
    logClick: PropTypes.func,
    parentState: PropTypes.string,
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