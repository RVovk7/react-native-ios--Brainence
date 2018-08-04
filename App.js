import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './modules';
import Navigate from './core/Navigate';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogged: false
        }
    }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Navigate/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
