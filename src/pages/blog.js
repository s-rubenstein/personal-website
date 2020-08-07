import * as _ from 'lodash/fp'
import * as React from 'react'
import { div, h, h1 } from 'react-hyperscript-helpers'
import { Route } from 'react-router-dom'
import { Table } from 'src/components/Table'
import { styles as generalStyles } from 'src/utils/styles'


export const BLOG_URL = '/blog'


const tagsWithFormat = tags => _.join(', ', tags)


export const Blog = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title'
      }, {
        Header: 'Tags',
        accessor: 'tags'
      }, {
        Header: 'Post Date',
        accessor: 'postDate'
      }, {
        Header: 'Last Updated',
        accessor: 'lastUpdated'
      }
    ],
    []
  )
  const blogPosts = React.useMemo(
    () => [
      {
        title: 'Non-Binary in a Binary Profession',
        tags: tagsWithFormat(['Gender', 'Software Engineering']),
        postDate: 'Thu Aug 06 2020',
        lastUpdated: 'Thu Aug 06 2020'
      }
    ], []
  )
  return div({ style: { ...generalStyles.pageContainer } }, [
    h1(['WIP: Real blog posts to come']),
    h(Table, { columns, data: blogPosts })
  ])
}


export const BlogRoute = blogProps => {
  return h(Route, { exact: true, path: BLOG_URL }, [h(Blog, blogProps)])
}
