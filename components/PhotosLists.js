import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import Head from './Head';
export default function Photo( props) {
 const {photosList, styles, logoutClick, albumTitle, navigate} = props.navigation.state.params;
    return (
        <Fragment>
            <Head albumTitle={albumTitle} logoutClick={logoutClick}  />
        <ScrollView >
            <View style={styles.albumsContainer} >
                { photosList.map(a => <View key={a.id} style={styles.album}>
                    <TouchableHighlight onPress={() =>  navigate('PhotoScreen', {
                        photo: a.url,
                        photoTitle: a.title,
                        logoutClick: logoutClick
                        })}>
                    <Image 
                        style={{ width: 180, height: 180 }}
                        source={{ uri: a.thumbnailUrl }}
                    />
                    </TouchableHighlight>
                    <Text style={styles.albumName} >{a.title}</Text>
                </View>)
                 }
            </View>
        </ScrollView>
        </Fragment>
    )
}
Photo.propTypes = {
    photosList: PropTypes.array,
}


