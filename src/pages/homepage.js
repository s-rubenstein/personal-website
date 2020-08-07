import {Route} from 'react-router-dom'
import { a, div, h, h1 } from 'react-hyperscript-helpers'
import { colors } from 'src/utils/colors'
import { styles as generalStyles } from 'src/utils/styles'
import { personalInfo } from 'src/utils/personal-info'

export const HOMEPAGE_URL = '/homepage'

export function Homepage() {
  return (div({style: generalStyles.pageContainer}, [
    h1(['Homepage']),
    div([`Hello and welcome to ${personalInfo.name}'s personal website! Here you can find all sorts of things 
      from my blog, my resume, and various sorts of things for hobbies of mine. This is also designed as
      a bit of a portfolio piece for me, so people can see my code style. (Although I am finding that
      developing as a solo project has very different considerations than a group project.) Please enjoy.`]),
    div({style: {marginTop: '1rem'}}, ['For anyone interested in looking at the code, that can be found ',
      a({style: {color: colors.secondary}, href: 'https://github.com/s-rubenstein/personal-website'}, ['here'])])
  ]))
}


export function HomepageRoute(homepageProps) {
  return (h(Route, {path: HOMEPAGE_URL}, [h(Homepage, homepageProps)]))
}
