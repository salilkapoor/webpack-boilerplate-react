import React from 'react';
import { render } from '@testing-library/react';

import App from '.';

const defaultProps = {
  sampleHeading: 'Sample',
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return render(<App {...finalProps} />);
};

describe('Scenario 1: Testing the initial sample code', () => {
  let wrapper = '';

  beforeEach(() => {
    wrapper = getWrapperSetup();
  });

  test('Unit Test 1: Should render component correctly', () => {
    expect(wrapper).toBeDefined();
  });
});
