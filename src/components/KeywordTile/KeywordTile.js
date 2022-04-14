import PropTypes from 'prop-types';

import styles from './KeywordTile.module.scss';

const KeywordTile = ({ value }) => (
  <button className={styles.component}>
    {value}
  </button>
);

KeywordTile.propTypes = {
  value: PropTypes.string.isRequired,
};

export default KeywordTile;