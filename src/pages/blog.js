import {Route} from 'react-router-dom'
import { h } from 'react-hyperscript-helpers'

export const BLOG_URL = '/blog'

export function Blog() {
  return (h('div', [
    h('div', ['hello world']),
    h('div', ['hello planet'])
  ]))
}


export function BlogRoute(blogProps) {
  return (h(Route, {path: BLOG_URL}, [h(Blog, blogProps)]))
}
