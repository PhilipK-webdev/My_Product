import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import TableItems from './components/TableItems';
import SearchProduct from './components/SearchProduct';
import axios from "axios";
import UpdatePrice from './components/UpdatePrice';

function App() {
  const [itemArray, setItemArray] = useState([]);
  const [isUpdatePriceAll, setIsUpdatePriceAll] = useState(false);
  useEffect(() => {
    displayProducts();
  }, [])

  const displayProducts = () => {
    axios
      .get("./all")
      .then(({ data }) => setItemArray(data))
      .catch((err) => console.log(err));
  }
  const sortBy = async (itemName, dataSearch) => {
    if (itemName != "" && itemName.length > 1) {
      switch (dataSearch) {
        case "1":
          const parse = parseInt(itemName)
          const response = await axios.get(`/barcode/${parse}`);
          setItemArray(response.data);
          break;
        case "2":
          const { data } = await axios.get(`/item/${itemName}`);
          setItemArray(data);
          break;
        case "3":
          const res = await axios.get(`/sup/${itemName} `);
          setItemArray(res.data);
          break;
        default:
          break;
      }
    } else {
      displayProducts();
    }
  }

  const updatePrice = (e) => {
    e.preventDefault();
    setIsUpdatePriceAll(a => !a);
  }

  const clickToUpdate = async (id, update) => {
    const parse = parseInt(id)
    await axios.patch(`/edit/${parse}`, { newPrice: update });
    displayProducts();
    setIsUpdatePriceAll(a => !a);
  }


  return (
    <div className="App">
      <Header />
      <Container fixed style={{ display: "flex", justifyContent: 'center' }}>
        <UpdatePrice updatePrice={updatePrice} />
      </Container>
      <Container fixed style={{ display: "flex" }}>
        <SearchProduct search={"חיפוש עם ברקוד"} dataSearch={"1"} sortBy={sortBy} />
        <SearchProduct search={"חיפוש מוצר על פי שם"} dataSearch={"2"} sortBy={sortBy} />
        <SearchProduct search={"חיפוש מוצר באמצעות ספק"} dataSearch={"3"} sortBy={sortBy} />
      </Container>
      <Container fixed>
        <TableItems itemArray={itemArray} isUpdatePriceAll={isUpdatePriceAll} clickToUpdate={clickToUpdate} />
      </Container>
    </div >
  );
}

export default App;
