import PropTypes from 'prop-types';

import styles from './CompanyLogo.module.scss';

const CompanyLogo = ({ src }) => (
  <div>
    <div className={styles.companyLogo}>
      <img src={`${process.env.PUBLIC_URL}${src}`} alt='logo' />
    </div>
  </div>
);

CompanyLogo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CompanyLogo;