export const initialFiltersState = {
  role: '',
  level: '',
  languages: [],
  tools: []
};

export const filtersReducer = (state, action) => {
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
        tools: [ ...state.tools, action.value ],
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