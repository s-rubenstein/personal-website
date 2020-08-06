import Color from 'color'

export const colors = {
  primary: '#E27D60',
  accent: 'blue',
  secondary: '#85DCB',
  success: '#41B3A3',
  warning: '#E8A87C',
  danger: '#C38D9E',
  white: '#FFFFFF'
}

export const colorWithWhiteness = (color, whiteness) =>
  Color(color).mix(Color('white'), whiteness).toString()

