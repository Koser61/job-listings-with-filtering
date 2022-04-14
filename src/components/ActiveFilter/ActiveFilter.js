import PropTypes from 'prop-types';

import { ReactComponent as RemoveIcon } from '../../images/icon-remove.svg';

import styles from './ActiveFilter.module.scss';

const ActiveFilter = ({ value }) => (
  <div className={styles.component}>
    <p>{value}</p>
    <button className={styles.removeButton}>
      <RemoveIcon />
    </button>
  </div>
);

ActiveFilter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ActiveFilter;