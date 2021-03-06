import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';

Albums.propTypes = {
    albums: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    navigate: PropTypes.func.isRequired,
    logoutClick: PropTypes.func.isRequired
}

export default function Albums({albums, photos, navigate, logoutClick}) {
    const rand = Math.floor(Math.random() * 49);

    return (
        <ScrollView >
            <View style={styles.albumsContainer}>
                {  albums.map(a => <View key={a.id} style={styles.album}>
                    <TouchableHighlight
                        onPress={() => navigate('PhotosListsScreen', {
                        styles: styles,
                        photosList: photos.filter(p => p.albumId === a.id),
                        albumTitle: a.title,
                        logoutClick: logoutClick,
                        navigate: navigate
                    })}>
                        <Image
                            style={{
                            width: 180,
                            height: 180
                        }}
                            source={{
                            uri: photos.filter(p => p.albumId === a.id)[rand].thumbnailUrl
                        }}/>
                    </TouchableHighlight>
                    <Text style={styles.albumName}>{a.title}</Text>
                </View>)
}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    albumsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    album: {

        borderColor: 'black',
        borderWidth: 1,
        width: 180,
        height: 180,
        margin: 3
    },
    albumName: {
        fontSize: 10,
        flexWrap: 'wrap',
        width: 180,
        bottom: 30
    }

});
