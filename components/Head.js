import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, Button} from 'react-native';
import ScalableText from 'react-native-text';

Head.propTypes = {
    logoutClick: PropTypes.func.isRequired,
    user: PropTypes.string,
    albumTitle: PropTypes.string
}

export default function Head({user, logoutClick, albumTitle}) {
    return (
        <View style={styles.headContainer}>
            <Text></Text>
            <Text
            adjustsFontSizeToFit
             minimumFontScale={2.5}
             style={!user && styles.albumTitle}>{user && `Hi,${user}` || `${albumTitle}`}</Text>
            <Button
                title="logout"
                color="red"
                accessibilityLabel="logoutButton"
                onPress={() => logoutClick()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headContainer: {
        margin: 3,
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    albumTitle: {
        width: 300,
    }
});
