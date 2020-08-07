import { h } from 'react-hyperscript-helpers'
import { Route } from 'react-router-dom'


export const BLOG_URL = '/blog'

export const Blog = () => {
  return h('div', ['hello world'])
}


export const BlogRoute = blogProps => {
  return h(Route, { exact: true, path: BLOG_URL }, [h(Blog, blogProps)])
}
