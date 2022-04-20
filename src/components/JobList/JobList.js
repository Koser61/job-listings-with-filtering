import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import JobListing from '../JobListing/JobListing';

import styles from './JobList.module.scss';

import data from '../../data.json';

const JobList = ({ filters, dispatch }) => {
  const [ jobsData, setJobsData ] = useState([]);

  useEffect(() => {
    setJobsData(data);
  }, []);
  
  const filteredJobsData = jobsData.filter((job) =>
    (filters.role !== '' ? job.role === filters.role : true)
    &&
    (filters.level !== '' ? job.level === filters.level : true)
    &&
    (filters.languages.lenght ? job.languages.includes(filters.languages) : true)
    &&
    (filters.tools.lenght ? job.tools.includes(filters.tools) : true)
  );

  return (
    <div className={styles.component}>
      {filteredJobsData.map((job) =>
        <JobListing key={job.id} {...job} dispatch={dispatch} />
      )}
    </div>
  );
};

JobList.propTypes = {
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default JobList;