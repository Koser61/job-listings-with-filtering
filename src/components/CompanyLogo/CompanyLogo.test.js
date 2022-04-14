import { render } from '@testing-library/react';

import CompanyLogo from './CompanyLogo';

describe('Component CompanyLogo', () => {
  it('renders without crashing (with src prop)', () => {
    render(<CompanyLogo src='.' />);
  });

  it('renders without crashing (without src prop)', () => {
    render(<CompanyLogo />);
  });
});