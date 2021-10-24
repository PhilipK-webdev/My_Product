import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import TableItems from './components/TableItems';

function App() {

  return (
    <div className="App">
      <Header />
      <Container fixed>
        <h1>Hello</h1>
      </Container>
      <Container fixed>
        <TableItems />
      </Container>
    </div>
  );
}

export default App;
