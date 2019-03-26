import React, { Component } from 'react'
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { selectLibrary } from '../actions'

import CardSection from './common/CardSection'
import { DescriptionText, TitleText } from '../styles'

class ListItem extends Component {
  renderDescription = () => {
    const {
      library: { item },
      expanded,
    } = this.props
    if (expanded) {
      return (
        <CardSection>
          <DescriptionText paddingLeft={15} paddingRight={15}>
            {item.description}
          </DescriptionText>
        </CardSection>
      )
    }
  }

  onPressListItem = id => {
    LayoutAnimation.spring()
    this.props.selectLibrary(id)
  }

  render() {
    const { id, title } = this.props.library.item

    return (
      <TouchableWithoutFeedback onPress={() => this.onPressListItem(id)}>
        <View>
          <CardSection>
            <TitleText paddingLeft={15} paddingRight={15}>
              {title}
            </TitleText>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id
  return { expanded }
}

export default connect(
  mapStateToProps,
  { selectLibrary },
)(ListItem)
