import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = ({ headerText, imageSrc }) => {
  const { headerContainerStyle, textStyle } = styles

  return (
    <View style={headerContainerStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: '#3cb878',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '25%',
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Header
