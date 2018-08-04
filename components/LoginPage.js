import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';

export default class LoginPage extends Component {
    static propTypes = {
        auth: PropTypes.func.isRequired
    };

    constructor(props) {

        super(props)
        this.state = {
            logID: '',
            logFail: false,
            timeClear: ''
        };
    };

    logClick = () => {
        const {props: { auth }, state: { logID }} = this;

        /[0-9]/g.test(logID) && + logID <= 10
            ? auth(logID)
            : this.setState({logFail: true});

        const timeClear = setTimeout(() => {
            this.setState({logFail: false, logID: ''})
        }, 1000);
        this.setState({timeClear})

    };

    loginInput = e => {
            this.setState({logID: e})

    };

    componentWillUnmount() {
        const {timeClear} = this.state;
        clearTimeout(timeClear);
    };
    render() {
        const {state: { logID, logFail }, logClick, loginInput } = this;
        return (
            <View style={styles.logMain}>
                <Text
                    style={[
                    {
                        color: 'red'
                    }, {
                        opacity: logFail
                            ? 100
                            : 0
                    }
                ]}>
                    Only numeric from 1 to 10
                </Text>

                <Text style={styles.logLabel}>
                    Enter your ID
                </Text>
                
                <TextInput
                    style={styles.logInput}
                    style={styles.logInput}
                    onChangeText={loginInput}
                    value={logID}/>
                <Button
                    onPress={logClick}
                    title="Sign In"
                    color="black"
                    accessibilityLabel="loginButton"/>
            </View>

        )
    }

}
LoginPage.propTypes = {
    controledInput: PropTypes.func,
    logClick: PropTypes.func,
    parentState: PropTypes.string
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