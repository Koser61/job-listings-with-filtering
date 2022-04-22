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

  const multipleValueMatch = (array, values) => {
    return values.every(value => {
      return array.includes(value);
    });
  };

  const { role, level, languages, tools } = filters;
  
  const filteredJobsData = jobsData.filter((job) =>
    (role !== '' ? job.role === role : true)
    &&
    (level !== '' ? job.level === level : true)
    &&
    (languages.length ? multipleValueMatch(job.languages, languages) : true)
    &&
    (tools.length ? multipleValueMatch(job.tools, tools) : true)
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
  filters: PropTypes.shape({
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default JobList;