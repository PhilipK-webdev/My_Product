import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import TableItems from './components/TableItems';
import SearchProduct from './components/SearchProduct';

function App() {










  return (
    <div className="App">
      <Header />
      <Container fixed style={{ display: "flex" }}>
        {/* Add info regarding update price by supllier or at overall. */}
      </Container>
      <Container fixed style={{ display: "flex" }}>
        <SearchProduct search={"חיפוש עם ברקוד"} dataSearch={1} />
        <SearchProduct search={"חיפוש מוצר על פי שם"} dataSearch={2} />
        <SearchProduct search={"חיפוש מוצר באמצעות ספק"} dataSearch={3} />
      </Container>
      <Container fixed>
        <TableItems />
      </Container>
    </div >
  );
}

export default App;
