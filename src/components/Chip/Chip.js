import PropTypes from 'prop-types';

import styles from './Chip.module.scss';

const Chip = ({ variant }) => {
  switch (variant) {
    case 'new':
      return (
        <div className={styles.new}>
          NEW!
        </div>
      );
    case 'featured':
      return (
        <div className={styles.featured}>
          FEATURED
        </div>
      );
    default:
      return console.error('Invalid `variant` prop');
  }
};

Chip.propTypes = {
  variant: PropTypes.oneOf(['new', 'featured']).isRequired,
};

export default Chip;