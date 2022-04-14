import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';
import JobListing from './components/JobListing/JobListing';

import './App.scss';

const App = () => (
  <>
    <Header />
    <Container>
      <Filters />
      <JobListing />
    </Container>
  </>
);

export default App;
