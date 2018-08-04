import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, Button} from 'react-native';

Head.propTypes = {
    logoutClick: PropTypes.func.isRequired,
    user: PropTypes.string,
    albumTitle: PropTypes.string
}

export default function Head({user, logoutClick, albumTitle}) {
    return (
        <View style={styles.headContainer}>
            <Text></Text>
            <Text style={styles.userName}>{user && `Hi,${user.slice(0, 12)}` || `${albumTitle.slice(0, 12)}...`}</Text>
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
    userName: {
        fontSize: 45,
    }
});
