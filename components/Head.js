import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default function Head({ user, logoutClick }) {
  return (
    <View style={styles.headContainer} >
      <Text></Text>
      <Text style={styles.userName}>{user}</Text>
      <Button
        title="logout"
        color="red"
        accessibilityLabel="Learn more about this purple button"
        onPress={()=> logoutClick()}
      />
    </View>
  )
}
Head.propTypes = {
  user: PropTypes.string
}

const styles = StyleSheet.create({
  headContainer: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 35,
  },
});
