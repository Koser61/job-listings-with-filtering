import Card from '../Card/Card';
import KeywordTile from '../KeywordTile/KeywordTile';

/* use public folder to store logos instead ! */
import Logo from '../../images/photosnap.svg';

import styles from './JobListing.module.scss';

const JobListing = () => (
  <div className={styles.component}>
    <Card article featured>
      <div className={styles.wrapper}>
        <div className={styles.summaryWrapper}>
          <div className={styles.logoBox}>
            <div className={styles.companyLogo}>
              <img src={Logo} alt='logo' />
            </div>
          </div>
          <div className={styles.summary}>
            <div className={styles.heading}>
              <span>Photosnap</span>
              <div className={styles.chipNew}>
                NEW!
              </div>
              <div className={styles.chipFeatured}>
                FEATURED
              </div>
            </div>
            <button className={styles.offerLink}>
              Senior Frontend Developer
            </button>
            <div className={styles.params}>
              <span>1d ago</span>
              <span className={styles.bullet}>
                •
              </span>
              <span>Full Time</span>
              <span className={styles.bullet}>
                •
              </span>
              <span>USA only</span>
            </div>
          </div>
        </div>
        <div className={styles.keywords}>
          <KeywordTile value='Frontend' />
          <KeywordTile value='Senior' />
          <KeywordTile value='HTML' />
          <KeywordTile value='CSS' />
          <KeywordTile value='JavaScript' />
        </div>
      </div>
    </Card>
  </div>
);

export default JobListing;