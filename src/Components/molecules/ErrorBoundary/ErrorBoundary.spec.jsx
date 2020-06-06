import React from 'react';
import { render } from '@testing-library/react';

import ErrorBoundary from '.';
import Buggy from '../../../../__mocks__/Buggy';

describe('TS-01: Not Error', () => {
  test('TC-01: Component gets rendered.', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Render Child</div>
      </ErrorBoundary>,
    );
    expect(getByText('Render Child')).toBeDefined();
  });

  describe('TS-02: Error', () => {
    beforeAll(() => {
      jest.spyOn(global.console, 'log').mockImplementation(() => {});
      jest.spyOn(global.console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
      global.console.log.mockRestore();
      global.console.error.mockRestore();
    });

    test('TC-01: Component gets rendered.', () => {
      const { container } = render(
        <ErrorBoundary>
          <Buggy />
        </ErrorBoundary>,
      );
      expect.any(Error);
      expect(global.console.error).toHaveBeenCalledTimes(2);
      expect(container).toBeDefined();
    });
  });
});
