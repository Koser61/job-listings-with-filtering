import Card from '../Card/Card';
import ClearButton from '../ClearButton/ClearButton';

import { ReactComponent as RemoveIcon } from '../../images/icon-remove.svg';

import styles from './Filters.module.scss';

const Filters = () => (
  <div className={styles.component}>
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.filtersWrapper}>
          <div className={styles.filter}>
            <p>Frontend</p>
            <button className={styles.removeButton}>
              <RemoveIcon />
            </button>
          </div>
          <div className={styles.filter}>
            <p>CSS</p>
            <button className={styles.removeButton}>
              <RemoveIcon />
            </button>
          </div>
          <div className={styles.filter}>
            <p>JavaScript</p>
            <button className={styles.removeButton}>
              <RemoveIcon />
            </button>
          </div>
        </div>
        <div className={styles.clearFiltersWrapper}>
          <ClearButton />
        </div>
      </div>
    </Card>
  </div>
);

export default Filters;