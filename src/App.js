import { useReducer } from 'react';

import { filtersReducer, initialFiltersState } from './reducers/filtersReducer';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';
import JobList from './components/JobList/JobList';
import Footer from './components/Footer/Footer';
import AnimateMount from './components/AnimateMount/AnimateMount';

import './App.scss';

const App = () => {
  const [ filters, dispatch ] = useReducer(filtersReducer, initialFiltersState);
  
  const filterSelected = (
    (filters.role !== '')
      ||
    (filters.level !== '')
      ||
    (filters.languages.length !== 0)
      ||
    (filters.tools.length !== 0)
  );
  
  return (
    <>
      <Header />
      <Container>
        <AnimateMount isVisible={filterSelected} variant='fade'>
          <Filters filters={filters} dispatch={dispatch} />
        </AnimateMount>
        <JobList filters={filters} dispatch={dispatch} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
