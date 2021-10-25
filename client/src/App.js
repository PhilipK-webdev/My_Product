import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import TableItems from './components/TableItems';
import SearchProduct from './components/SearchProduct';
import axios from "axios";

function App() {

  const [searchItem, setSearchItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    displayProducts();
  }, [])

  const displayProducts = () => {
    axios
      .get("./all")
      .then(({ data }) => setItemArray(data))
      .catch((err) => console.log(err));
  }
  const sortBy = (itemName, dataSearch) => {

    if (itemName != "") {
      switch (dataSearch) {
        case "1":
          const parse = parseInt(itemName)
          axios.get(`/barcode/${parse}`).then(({ data }) => {
            setItemArray(data)

          }).catch(err => console.log(err));
          break;
        case "2":
          axios.get(`/item/${itemName} `).then(({ data }) => {
            setItemArray(data);
          }).catch(err => console.log(err));
          break;
        case "3":
          axios.get(`/sup/${itemName} `).then(({ data }) => setItemArray(data)).catch((err) => console.log(err));
          break;
        default:
          break;
      }
    } else {
      displayProducts();
    }
  }
  return (
    <div className="App">
      <Header />
      <Container fixed style={{ display: "flex" }}>
        {/* Add info regarding update price by supllier or at overall. */}
      </Container>
      <Container fixed style={{ display: "flex" }}>
        <SearchProduct search={"חיפוש עם ברקוד"} dataSearch={"1"} sortBy={sortBy} />
        <SearchProduct search={"חיפוש מוצר על פי שם"} dataSearch={"2"} sortBy={sortBy} />
        <SearchProduct search={"חיפוש מוצר באמצעות ספק"} dataSearch={"3"} sortBy={sortBy} />
      </Container>
      <Container fixed>
        <TableItems itemArray={itemArray} />
      </Container>
    </div >
  );
}

export default App;
