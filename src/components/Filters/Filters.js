import PropTypes from 'prop-types';

import Card from '../Card/Card';
import ActiveFilter from '../ActiveFilter/ActiveFilter';
import ClearButton from '../ClearButton/ClearButton';

import styles from './Filters.module.scss';

const Filters = ({ filters }) => (
  <div className={styles.component}>
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.filtersWrapper}>
          {filters.map((filter, i) =>
            <ActiveFilter key={i} value={filter} />
          )}
        </div>
        <div className={styles.clearFiltersWrapper}>
          <ClearButton />
        </div>
      </div>
    </Card>
  </div>
);

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;