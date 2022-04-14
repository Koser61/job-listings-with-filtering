import Card from '../Card/Card';
import ActiveFilter from '../ActiveFilter/ActiveFilter';
import ClearButton from '../ClearButton/ClearButton';

import styles from './Filters.module.scss';

const Filters = () => (
  <div className={styles.component}>
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.filtersWrapper}>
          <ActiveFilter value='Frontend' />
          <ActiveFilter value='CSS' />
          <ActiveFilter value='JavaScript' />
        </div>
        <div className={styles.clearFiltersWrapper}>
          <ClearButton />
        </div>
      </div>
    </Card>
  </div>
);

export default Filters;