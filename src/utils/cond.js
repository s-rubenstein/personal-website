import * as fp from 'lodash/fp'

const maybeCall = maybeFn => fp.isFunction(maybeFn) ? maybeFn() : maybeFn

export const cond = (...args) => {
  for (const arg of args) {
    console.log(arg)
    if (fp.isArray(arg)) {
      const [predicate, value] = arg
      if (predicate) return maybeCall(value)
    } else {
      return maybeCall(arg)
    }
  }
}
