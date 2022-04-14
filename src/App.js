import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';
import JobListing from './components/JobListing/JobListing';

import './App.scss';

import data from './data.json';

const App = () => (
  <>
    <Header />
    <Container>
      <Filters filters={['HTML', 'CSS', 'JavaScript']} />
      <JobListing {...data[0]} />
    </Container>
  </>
);

export default App;
