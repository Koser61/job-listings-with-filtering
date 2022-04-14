import { render, screen } from '@testing-library/react';

import JobSummary from './JobSummary';

describe('Component JobSummary', () => {
  it('renders job listing details from props', () => {
    const company = 'Photosnap';
    const position = 'Senior Frontend Developer';
    const postedAt = '1d ago';
    const contract = 'Full Time';
    const location = 'USA only';
    
    render(
      <JobSummary
        company={company}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
      />
    );

    const companyName = screen.getByLabelText('company name');
    const jobPosition = screen.getByLabelText('position');
    const offerPostedAt = screen.getByLabelText('posted');
    const contractType = screen.getByLabelText('contract');
    const jobLocation = screen.getByLabelText('location');

    expect(companyName).toHaveTextContent(company);
    expect(jobPosition).toHaveTextContent(position);
    expect(offerPostedAt).toHaveTextContent(postedAt);
    expect(contractType).toHaveTextContent(contract);
    expect(jobLocation).toHaveTextContent(location);
  });

  it('renders "NEW!" chip when given isNew prop', () => {
    const company = 'a';
    const position = 'b';
    const postedAt = 'c';
    const contract = 'd';
    const location = 'e';
    
    render(
      <JobSummary
        company={company}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
        isNew
      />
    );

    const chipNew = screen.getByText('NEW!');
    expect(chipNew).toBeTruthy();
  });

  it('renders "FEATURED" chip when given isFeatured prop', () => {
    const company = 'a';
    const position = 'b';
    const postedAt = 'c';
    const contract = 'd';
    const location = 'e';
    
    render(
      <JobSummary
        company={company}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
        isFeatured
      />
    );

    const chipFeatured = screen.getByText('FEATURED');
    expect(chipFeatured).toBeTruthy();
  });
});