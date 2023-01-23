import '@testing-library/jest-dom';

import Index from '../../pages/index';

describe('Home', () => {
  it('renders a Home', () => {
    expect(typeof Index).toBe('function');
  });
});
