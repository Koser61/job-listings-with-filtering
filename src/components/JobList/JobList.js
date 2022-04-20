import { useState, useEffect } from 'react';

import JobListing from '../JobListing/JobListing';

import styles from './JobList.module.scss';

import data from '../../data.json';

const JobList = () => {
  const [ jobsData, setJobsData ] = useState([]);

  useEffect(() => {
    setJobsData(data);
  }, []);

  /* [TO DO] filter job listings by filters state */

  return (
    <div className={styles.component}>
      {jobsData.map((job) =>
        <JobListing key={job.id} {...job} />
      )}
    </div>
  );
};

export default JobList;