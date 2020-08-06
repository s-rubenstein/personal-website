import { h } from 'react-hyperscript-helpers'
import { Button } from 'rebass'
import { colors, colorWithWhiteness } from 'src/utils/colors'

export const ButtonPrimary = ({children, disabled, style, ...props}) => {
  return h(Button, {...props, disabled: disabled, sx: {
      color: colors.white,
      backgroundColor: colors.primary,
      ':hover': {
        backgroundColor: disabled ? undefined : colorWithWhiteness(colors.primary, 0.2),
        cursor: disabled ? 'not-allowed' : undefined
      },
      ...style
  }}, [children])
}

export const ButtonSecondary = ({children, disabled, style, ...props}) => {
  return h(Button, {...props, disabled: disabled, sx: {
      color: colors.primary,
      backgroundColor: colors.white,
      border: `1px solid ${colors.primary}`,
      ':hover': {
        backgroundColor: disabled ? undefined : colorWithWhiteness(colors.primary, 0.2),
        color: disabled ? undefined : colors.white,
        cursor: disabled ? 'not-allowed' : undefined
      }
    }}, [children])
}
