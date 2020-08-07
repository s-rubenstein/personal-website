import PropTypes from 'prop-types'
import { Component } from 'react'
import { div, h } from 'react-hyperscript-helpers'
import {
  Link
} from 'react-router-dom'
import { Button } from 'rebass'
import { colors, colorWithWhiteness } from 'src/utils/colors'


export const styles = {
  buttonPrimary: {
    color: colors.white,
    backgroundColor: colors.primary
  },
  buttonPrimaryHover: (disabled = false) => {
    return {
      backgroundColor: disabled ? undefined : colorWithWhiteness(colors.primary, 0.2),
      cursor: disabled ? 'not-allowed' : undefined
    }
  }
}

class HoverWrapper extends Component {
  static propTypes = {
    containerStyle: PropTypes.object,
    hoverStyle: PropTypes.object,
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  render() {
    const { containerStyle, hoverStyle, children } = this.props
    const { hover } = this.state
    return div({
      onMouseEnter: () => this.setState({ hover: true }),
      onMouseLeave: () => this.setState({ hover: false }),
      style: {
        ...containerStyle,
        ...(hover ? hoverStyle : {})
      }
    },
    [children])
  }
}

export const ButtonPrimary = ({ children, disabled, onClick, to, href, style, ...props }) => {
  console.log(onClick)
  return h(Button, {
    ...props,
    disabled,
    onClick,
    sx: {
      ...styles.buttonPrimary,
      ':hover': {
        ...styles.buttonPrimaryHover(disabled)
      },
      ...style
    }
  },
  [children])
}

export const ButtonLink = ({ children, disabled, to, style, containerStyle, hoverStyle, ...props }) => {
  return h(HoverWrapper, {
    containerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...containerStyle
    },
    hoverStyle,
  },
  [h(Link, {
    ...props,
    to: disabled ? undefined : to,
    style: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...style
    }
  }, [children])])
}

export const ButtonSecondary = ({ children, disabled, style, ...props }) => {
  return h(Button, {
    ...props, disabled, sx: {
      color: colors.primary,
      backgroundColor: colors.white,
      border: `1px solid ${colors.primary}`,
      ':hover': {
        backgroundColor: disabled ? undefined : colorWithWhiteness(colors.primary, 0.2),
        color: disabled ? undefined : colors.white,
        cursor: disabled ? 'not-allowed' : undefined
      }
    }
  }, [children])
}
