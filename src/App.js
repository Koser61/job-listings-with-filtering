import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Filters from './components/Filters/Filters';

import './App.scss';

const App = () => (
  <>
    <Header />
    <Container>
      <Filters />
    </Container>
  </>
);

export default App;
