import React from 'react'
import { render } from '@testing-library/react'

import App from '.'

const getWrapperSetup = () => render(<App />)

describe('Scenario 1: Testing the initial sample code', () => {
  let wrapper = ''

  beforeEach(() => {
    wrapper = getWrapperSetup()
  })

  test('Unit Test 1: Should render component correctly', () => {
    expect(wrapper).toBeDefined()
  })
})
