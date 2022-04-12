import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ variant, featured, children }) => {
  if(variant === 'job') {
    return (
      <article className={featured ? styles.featured : styles.component}>
        {children}
      </article>
    );
  } else if(variant === 'default') {
    return (
      <div className={styles.component}>
        {children}
      </div>
    );
  }
};

Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'job']).isRequired,
  featured: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;