/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */

import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import { createStyle } from '../../../shared/util/fontStyle'

class NewText extends React.Component {
  render() {
    const {
      fontSize = 16,
      style,
      delta,
      capitalize,
      text,
      ...rest
    } = this.props
    const customStyle = createStyle(style, fontSize + delta)
    const { children } = this.props

    return (
      <Text {...rest} style={customStyle} allowFontScaling={false}>
        {text ? (capitalize ? text.toUpperCase() : text) : children}
      </Text>
    )
  }
}

const mapStateToProps = state => ({
  delta: state.config.font.delta,
})

export default connect(mapStateToProps)(NewText)
