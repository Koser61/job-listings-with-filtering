import PropTypes from 'prop-types';

import Card from '../Card/Card';
import ActiveFilter from '../ActiveFilter/ActiveFilter';
import ClearButton from '../ClearButton/ClearButton';

import styles from './Filters.module.scss';

const Filters = ({ filters, dispatch }) => {
  return (
    <div className={styles.component}>
      <Card>
        <div className={styles.wrapper}>
          <div className={styles.filtersWrapper}>
            {filters.role !== '' &&
              <ActiveFilter
                property='role'
                value={filters.role}
                dispatch={dispatch}
              />}
            {filters.level !== '' &&
              <ActiveFilter
                property='level'
                value={filters.level}
                dispatch={dispatch}
              />}
            {filters.languages.map((language, i) =>
              <ActiveFilter
                key={i}
                property='languages'
                value={language}
                dispatch={dispatch}
              />)}
            {filters.tools.map((tool, i) =>
              <ActiveFilter
                key={i}
                property='tools'
                value={tool}
                dispatch={dispatch}
              />)}
          </div>
          <div className={styles.clearFiltersWrapper}>
            <ClearButton dispatch={dispatch} />
          </div>
        </div>
      </Card>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Filters;