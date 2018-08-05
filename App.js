import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './modules';
import Navigate from './navigation';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Navigate/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet
.create({
container: {
    flex: 1
}
});
