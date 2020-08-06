import { h, div } from 'react-hyperscript-helpers'
import { ButtonPrimary } from 'src/components/Buttons'
import { colors } from 'src/utils/colors'



export function NavBar() {
  return div({style: {width: '100%', display: 'flex', height: '4rem', backgroundColor: colors.primary, alignItems: 'center', paddingLeft: '1rem'}, testProp: 'prop!'}, [
    h(ButtonPrimary, ['hello world']),

  ])
}
