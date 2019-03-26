import styled from 'styled-components'
import { Text, View } from 'react-native'

// Container Views

export const BaseContainerView = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
`

// Text Styles

const PaddingText = styled.Text`
  padding-left: ${props => props.paddingLeft || 0};
  padding-right: ${props => props.paddingRight || 0};
`

export const TitleText = styled(PaddingText)`
  font-size: ${props => props.fontSize || 18};
`

export const DescriptionText = styled(PaddingText)`
  font-size: ${props => props.fontSize || 14};
`
