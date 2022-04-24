import { useReducer } from 'react';

import { filtersReducer, initialFiltersState } from './reducers/filtersReducer';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';
import JobList from './components/JobList/JobList';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
  const [ filters, dispatch ] = useReducer(filtersReducer, initialFiltersState);

  const filterNotSelected = (
    filters.role === '' &&
    filters.level === '' &&
    !filters.languages.length &&
    !filters.tools.length
  );

  return (
    <>
      <Header />
      <Container>
        {!filterNotSelected &&
          <Filters filters={filters} dispatch={dispatch} />
        }
        <JobList filters={filters} dispatch={dispatch} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
