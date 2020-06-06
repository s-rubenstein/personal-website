import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { h } from 'react-hyperscript-helpers'

test('renders learn react link', () => {
  const { getByText } = render(h(App))
  const linkElement = getByText(/Homepage/i)
  expect(linkElement).toBeInTheDocument()
});