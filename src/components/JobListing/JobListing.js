import PropTypes from 'prop-types';

import Card from '../Card/Card';
import KeywordTile from '../KeywordTile/KeywordTile';
import JobSummary from '../JobSummary/JobSummary';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

import styles from './JobListing.module.scss';

const JobListing = (props) => (
  <div className={styles.component}>
    <Card article featured={props.featured}>
      <div className={styles.wrapper}>
        <div className={styles.summaryWrapper}>
          <CompanyLogo src={props.logo} />
          <JobSummary
            company={props.company}
            position={props.position}
            postedAt={props.postedAt}
            contract={props.contract}
            location={props.location}
            isNew={props.new}
            isFeatured={props.featured}
          />
        </div>
        <div className={styles.keywords}>
          <KeywordTile value={props.role} />
          <KeywordTile value={props.level} />
          {props.languages.map((language, i) => 
            <KeywordTile key={i} value={language} />
          )}
          {props.tools.map((tool, i) => 
            <KeywordTile key={i} value={tool} />
          )}
        </div>
      </div>
    </Card>
  </div>
);

JobListing.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  new: PropTypes.bool.isRequired,
  featured: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
};

export default JobListing;