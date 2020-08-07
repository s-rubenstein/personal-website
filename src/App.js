import './App.css'

import * as React from 'react'
import { div, h } from 'react-hyperscript-helpers'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { NavBar } from 'src/components/NavBar'
import { BlogRoute } from 'src/pages/blog'
import { HomepageRoute } from 'src/pages/homepage'


function App() {
  return (
    h(Router, [
      h(NavBar, []),
      div([
        h(Switch, [
          h(React.Fragment, [
            h(HomepageRoute),
            h(BlogRoute)
          ])
        ])
      ])
    ])
  )
}

export default App
