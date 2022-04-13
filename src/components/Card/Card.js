import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ article, featured, children }) => {
  if(article) {
    return (
      <article className={featured ? styles.featured : styles.component}>
        {children}
      </article>
    );
  } else {
    return (
      <div className={styles.component}>
        {children}
      </div>
    );
  }
};

Card.propTypes = {
  article: PropTypes.bool,
  featured: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;