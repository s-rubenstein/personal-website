import * as fp from 'lodash/fp'
import { forwardRef } from 'react'


export const withDisplayName = fp.curry((name, WrappedComponent) => {
  WrappedComponent.displayName = name
  return WrappedComponent
})

export const forwardRefWithName = fp.curry((name, WrappedComponent) => {
  return withDisplayName(name, forwardRef(WrappedComponent))
})