import { div, h } from 'react-hyperscript-helpers'
import { ButtonLink, styles as buttonStyles } from 'src/components/Buttons'
import { colors } from 'src/utils/colors'
import * as _ from 'lodash/fp'


const style = {
  buttonLink: {
    height: '100%',
    width: '8rem'
  }
}
const NAV_BAR_LINKS = {
  homepage: {
    to: 'homepage',
    text: 'Homepage'
  },
  blog: {
    to: 'blog',
    text: 'Blog'
  }
}

export function NavBar() {
  // width should be 100% minus any padding or margins on this element
  return div({ style: { width: '100%', display: 'flex', height: '4rem', backgroundColor: colors.primary, alignItems: 'center'}, testProp: 'prop!' }, [
    _.map((link) => h(ButtonLink, {
      to: link.to,
      containerStyle: {
        ...buttonStyles.containerStyle,
        ...style.buttonLink
      },
      hoverStyle: buttonStyles.buttonPrimaryHover(),
      style: {color: colors.accent}
    }, [link.text]), NAV_BAR_LINKS)

  ])
}
