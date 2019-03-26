import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const InputIconLeft = ({
  icon,
  type,
  color,
  value,
  placeholder,
  onChangeText,
  autoCapitalize,
  secureTextEntry,
}) => {
  const { inputStyle, iconStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Icon style={iconStyle} name={icon} type={type} color={color} />
      <TextInput
        style={inputStyle}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 15,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  iconStyle: {
    fontSize: 18,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default InputIconLeft
