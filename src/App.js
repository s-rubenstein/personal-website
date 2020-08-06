import * as React from 'react'
import { NavBar } from 'src/components/NavBar'
import { HomepageRoute, HOMEPAGE_URL } from 'src/pages/homepage'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'
import { h } from 'react-hyperscript-helpers'

function App() {
  return (
    h(React.Fragment, [
      h(NavBar, []),
      h(Router, [
        h('div', [
          h('ul', [
            h(Link, {to: HOMEPAGE_URL}, ['Homepage']),
          ]),
          h(Switch, [
            h(HomepageRoute)
          ])
        ])
      ])
    ])
  )
}

export default App;
