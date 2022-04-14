import Card from '../Card/Card';
import KeywordTile from '../KeywordTile/KeywordTile';
import JobSummary from '../JobSummary/JobSummary';

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
          <JobSummary
            company='Photosnap'
            position='Senior Frontend Developer'
            postedAt='1d ago'
            contract='Full Time'
            location='USA only'
            isNew
            isFeatured
          />
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