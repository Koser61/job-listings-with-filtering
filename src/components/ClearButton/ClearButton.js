import PropTypes from 'prop-types';

import styles from './ClearButton.module.scss';

const ClearButton = ({ dispatch }) => (
  <button
    className={styles.component}
    onClick={() => dispatch({ type: 'CLEAR_FILTERS' })}
  >
    Clear
  </button>
);

ClearButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default ClearButton;