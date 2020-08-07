import * as _ from 'lodash/fp'
import * as React from 'react'
import { div, h, h1 } from 'react-hyperscript-helpers'
import { Link, Route } from 'react-router-dom'
import { Table } from 'src/components/Table'
import { DEI_PROFESSION_TITLE, DEI_PROFESSION_URL } from 'src/pages/blog/diversity-profession'
import { colors } from 'src/utils/colors'
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
        title: h(Link, {to: DEI_PROFESSION_URL, style: {color: colors.secondary}}, [DEI_PROFESSION_TITLE]),
        tags: tagsWithFormat(['Diversity']),
        postDate: 'Thu Aug 06 2020',
        lastUpdated: 'Thu Aug 06 2020'
      }
    ], []
  )
  return div({ style: { ...generalStyles.pageContainer } }, [
    h1(['Blog Posts']),
    h(Table, { columns, data: blogPosts })
  ])
}


export const BlogRoute = blogProps => {
  return h(Route, { exact: true, path: BLOG_URL }, [h(Blog, blogProps)])
}
