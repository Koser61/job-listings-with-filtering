import PropTypes from 'prop-types';

import { ReactComponent as RemoveIcon } from '../../images/icon-remove.svg';

import styles from './ActiveFilter.module.scss';

const ActiveFilter = ({ property, value, dispatch }) => {
  const removeFilter = () => {
    const getActionObject = () => {
      switch(property) {
        case 'role':
          return { type: 'SET_ROLE_FILTER', value: '' };
        case 'level':
          return { type: 'SET_LEVEL_FILTER', value: '' };
        case 'languages':
          return { type: 'REMOVE_LANGUAGE_FILTER', value: value };
        case 'tools':
          return { type: 'REMOVE_TOOLS_FILTER', value: value };
        default:
          return;
      }
    };

    const actionObject = getActionObject();

    dispatch(actionObject);
  };

  return (
    <div className={styles.component}>
      <p>{value}</p>
      <button
        className={styles.removeButton}
        onClick={() => removeFilter()}
      >
        <RemoveIcon />
      </button>
    </div>
  );
};

ActiveFilter.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ActiveFilter;