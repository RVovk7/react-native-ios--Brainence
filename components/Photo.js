import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import Head from './Head';
export default function Photo( props) {
 const {photo, photoTitle, logoutClick} = props.navigation.state.params;
    return (
        <Fragment>
            <Head albumTitle={photoTitle} logoutClick={logoutClick}  />
        <ScrollView >
            <View  style={styles.photoContainer} >
                { 
                    <Image 
                        style={{ width: 300, height: 300 }}
                        source={{ uri: photo }}
                    />
                 }
            </View>
        </ScrollView>
        </Fragment>
    )
}
Photo.propTypes = {
    photosList: PropTypes.array,
}
const styles = StyleSheet.create({
    photoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
});