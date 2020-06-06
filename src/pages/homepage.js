import {Route} from 'react-router-dom'
import { h } from 'react-hyperscript-helpers'

export const HOMEPAGE_URL = '/homepage'

export function Homepage() {
  return (h('div', [
    h('div', ['hello world']),
    h('div', ['hello planet'])
  ]))
}


export function HomepageRoute(homepageProps) {
  return (h(Route, {path: HOMEPAGE_URL}, [h(Homepage, homepageProps)]))
}