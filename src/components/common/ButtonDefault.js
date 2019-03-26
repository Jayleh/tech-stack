import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonDefault = ({ onPress, children }) => {
  const { buttonContainerStyle, buttonStyle, buttonTextStyle } = styles
  return (
    <View style={buttonContainerStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={buttonTextStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  buttonStyle: {
    flex: 1, // expand to fill content as much as it can
    alignSelf: 'stretch', // stretch to fill the limits of the container
    backgroundColor: '#3cb878',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#3cb878',
    marginLeft: 5,
    marginRight: 5,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default ButtonDefault
