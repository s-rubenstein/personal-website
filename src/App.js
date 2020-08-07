import * as React from 'react'
import { NavBar } from 'src/components/NavBar'
import { BlogRoute } from 'src/pages/blog'
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
    h(Router, [
      h(NavBar, []),
      h('div', [
        h(Switch, [
          h(HomepageRoute),
          h(BlogRoute)
        ])
      ])
    ])
  )
}

export default App;
