import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1, // make sure it fills up the full width of the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Spinner
