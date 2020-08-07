import Color from 'color'

export const colors = {
  primary: '#323031',
  accent: '#70d6ff',
  secondary: '#7D787A',
  success: '#084c61',
  warning: '#ffc857',
  danger: '#db3a34',
  white: '#FFFFFF'
}

export const colorWithWhiteness = (color, whiteness) =>
  Color(color).mix(Color('white'), whiteness).toString()

