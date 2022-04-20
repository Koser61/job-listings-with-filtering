import { useReducer } from 'react';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';
import JobList from './components/JobList/JobList';

import './App.scss';

const App = () => {
  const filtersReducer = (state, action) => {
    switch(action.type) {
      case 'SET_ROLE_FILTER':
        return {
          ...state,
          role: action.value,
        };
      case 'SET_LEVEL_FILTER':
        return {
          ...state,
          level: action.value,
        };
      case 'ADD_LANGUAGE_FILTER':
        return {
          ...state,
          languages: [ ...state.languages, action.value ],
        };
      case 'REMOVE_LANGUAGE_FILTER':
        const targetLanguageFilterIndex = state.languages.indexOf(action.value);

        return {
          ...state,
          languages: state.languages.filter((filter, index) =>
            index !== targetLanguageFilterIndex),
        };
      case 'ADD_TOOLS_FILTER':
        return {
          ...state,
          languages: [ ...state.languages, action.value ],
        };
      case 'REMOVE_TOOLS_FILTER':
        const targetToolsFilterIndex = state.tools.indexOf(action.value);

        return {
          ...state,
          tools: state.tools.filter((filter, index) =>
            index !== targetToolsFilterIndex),
        };
      case 'CLEAR_FILTERS':
        return {
          ...initialFiltersState,
        };
      default:
        return state;
    }
  };

  const initialFiltersState = {
    role: '',
    level: '',
    languages: [],
    tools: []
  };

  const [ filters, dispatch ] = useReducer(filtersReducer, initialFiltersState);

  return (
    <>
      <Header />
      <Container>
        <Filters filters={filters} dispatch={dispatch} />
        <JobList filters={filters} dispatch={dispatch} />
      </Container>
    </>
  );
};

export default App;
