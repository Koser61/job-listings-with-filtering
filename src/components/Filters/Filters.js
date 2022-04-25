import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import Card from '../Card/Card';
import ActiveFilter from '../ActiveFilter/ActiveFilter';
import ClearButton from '../ClearButton/ClearButton';
import AnimateMount from '../AnimateMount/AnimateMount';
import AnimatedMountItem from '../AnimatedMountItem/AnimatedMountItem';

import styles from './Filters.module.scss';

const Filters = ({ filters, dispatch }) => {
  return (
    <div className={styles.component}>
      <Card>
        <div className={styles.wrapper}>
          <div className={styles.filtersWrapper}>
            <AnimateMount isVisible={filters.role !== ''} variant='pop'>
              <ActiveFilter
                property='role'
                value={filters.role}
                dispatch={dispatch}
              />
            </AnimateMount>
            <AnimateMount isVisible={filters.level !== ''} variant='pop'>
              <ActiveFilter
                property='level'
                value={filters.level}
                dispatch={dispatch}
              />
            </AnimateMount>
            <AnimatePresence>
              {filters.languages.map((language, i) => (
                <AnimatedMountItem key={i} index={i}>
                  <ActiveFilter
                    property='languages'
                    value={language}
                    dispatch={dispatch}
                  />
                </AnimatedMountItem>
              ))}
            </AnimatePresence>
            <AnimatePresence>
              {filters.tools.map((tool, i) => (
                <AnimatedMountItem key={i} index={i}>
                  <ActiveFilter
                    property='tools'
                    value={tool}
                    dispatch={dispatch}
                  />
                </AnimatedMountItem>
              ))}
            </AnimatePresence>
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
  filters: PropTypes.shape({
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Filters;