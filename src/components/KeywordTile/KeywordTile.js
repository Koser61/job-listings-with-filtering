import PropTypes from 'prop-types';

import styles from './KeywordTile.module.scss';

const KeywordTile = ({ property, value, dispatch }) => {
  const addFilter = () => {
    const determineActionType = () => {
      switch(property) {
        case 'role':
          return 'SET_ROLE_FILTER';
        case 'level':
          return 'SET_LEVEL_FILTER';
        case 'languages':
          return 'ADD_LANGUAGE_FILTER';
        case 'tools':
          return 'ADD_TOOLS_FILTER';
        default:
          return;
      }
    };

    const actionType = determineActionType();

    dispatch({ type: actionType, value: value });
  };

  return (
    <button
      className={styles.component}
      onClick={() => addFilter()}
    >
      {value}
    </button>
  );
};

KeywordTile.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default KeywordTile;