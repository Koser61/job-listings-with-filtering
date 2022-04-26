import PropTypes from 'prop-types';

import Chip from '../Chip/Chip';

import styles from './JobSummary.module.scss';

const JobSummary = ({
  company,
  position,
  postedAt,
  contract,
  location,
  isNew,
  isFeatured,
}) => (
  <div className={styles.component}>
    <div className={styles.heading}>
      <p data-testid='company-name'>{company}</p>
      {isNew && <Chip variant='new' />}
      {isFeatured && <Chip variant='featured' />}
    </div>
    <button
      className={styles.offerLink}
      aria-label='link'
    >
      {position}
    </button>
    <div className={styles.params}>
      <span data-testid='posted'>{postedAt}</span>
      <span className={styles.bullet}>•</span>
      <span data-testid='contract'>{contract}</span>
      <span className={styles.bullet}>•</span>
      <span data-testid='location'>{location}</span>
    </div>
  </div>
);

JobSummary.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
  isFeatured: PropTypes.bool,
};

export default JobSummary;