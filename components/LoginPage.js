import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class LoginPage extends Component {
    static propTypes = {
        auth: PropTypes.func.isRequired,
        userNotFound: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props)
        this.state = {
            logID: '',
            logFail: false,
            userNotFound: false,
            timeClear: '',
        };
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.userNotFound) return {logFail: true, userNotFound: true}
        }
  
     logClick = () => {
        const {props: { auth }, state: { logID }} = this;

        /^\d+$/g.test(logID) ? auth(logID) : this.setState({logFail: true});
            
        this.setState({logID: ''});
        this.warning();
    };

    warning = () => {
        const timeClear = setTimeout(() => {
            this.setState({logFail: false, userNotFound: false})
        }, 2000);
        this.setState({timeClear})
    }

    loginInput = e => {
        this.setState({logID: e})
    };

    componentWillUnmount() {
        const {timeClear} = this.state;
        clearTimeout(timeClear);
    };

    render() {
        const { state: { logID, logFail, userNotFound }, logClick, loginInput } = this;
        return (
            <View style={styles.logMain}>
                <Text style={[ { color: 'red' }, { opacity: logFail ? 100 : 0 }  ]}>
                    {userNotFound ? 'User not found' : 'Only numeric'}
                </Text>

                <Text style={styles.logLabel}>
                    Enter your ID
                </Text>

                <TextInput style={styles.logInput} onChangeText={loginInput} value={logID}/>
                <Button
                    onPress={logClick}
                    title="Sign In"
                    color="black"
                    accessibilityLabel="loginButton"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logMain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logLabel: {
        fontSize: 25,
        marginBottom: 10
    },
    logInput: {
        height: 40,
        width: 150,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
});