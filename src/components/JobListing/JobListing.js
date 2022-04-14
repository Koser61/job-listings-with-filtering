import Card from '../Card/Card';
import KeywordTile from '../KeywordTile/KeywordTile';
import JobSummary from '../JobSummary/JobSummary';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

import styles from './JobListing.module.scss';

const JobListing = () => (
  <div className={styles.component}>
    <Card article featured>
      <div className={styles.wrapper}>
        <div className={styles.summaryWrapper}>
          <CompanyLogo src='/logos/photosnap.svg' />
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