import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
})

export default CardSection
