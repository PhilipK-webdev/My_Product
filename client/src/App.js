import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import TableItems from './components/TableItems';
import SearchProduct from './components/SearchProduct';
import axios from "axios";
import UpdatePrice from './components/UpdatePrice';
import AlertMessage from './components/components/AlertMessage';
function App() {
  const [itemArray, setItemArray] = useState([]);
  const [supplierArray, setSupplierArray] = useState([]);
  const [isUpdatePriceAll, setIsUpdatePriceAll] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatusBase] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          let isNum = /^\d+$/.test(itemName);
          if (isNum) {
            const parse = parseInt(itemName)
            const response = await axios.get(`/barcode/${parse}`);
            setItemArray(response.data);
          }
          break;
        case "2":
          const { data } = await axios.get(`/item/${itemName}`);
          setItemArray(data);
          break;
        case "3":
          const res = await axios.get(`/sup/${itemName} `);
          if (open) {
            setSupplierArray(res.data);
          } else {
            setItemArray(res.data);
          }
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

  const clickToUpdate = async (id, update, after, discount) => {
    const parse = parseInt(id);
    const upOrDown = calculatePrecentage(update, after, discount)
    const response = await axios.patch(`/edit/${parse}`, { newPrice: update, discount: upOrDown });
    if (response.status === 200) {
      displayProducts();
      setSupplierArray([]);
      setIsUpdatePriceAll(a => !a);
      setStatusBase({ msg: "Success - Update Complete", key: Math.random() });
    } else {
      setStatusBase({ msg: "ERROR", key: Math.random() });
    }

  }

  const calculatePrecentage = (before, after, str) => {
    const result = Math.floor((after * 100) / before);
    result - 100 > 0 ? str += "up" : str += "down";
    return str;
  }
  return (
    <div className="App">
      <Header />
      <Container fixed style={{ display: "flex", justifyContent: 'center' }}>
        <UpdatePrice
          updatePrice={updatePrice}
          sortBy={sortBy}
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          itemArray={supplierArray}
          isUpdatePriceAll={isUpdatePriceAll}
          clickToUpdate={clickToUpdate}
        />

      </Container>
      <Container fixed style={{ display: "flex" }}>
        <SearchProduct search={"חיפוש עם ברקוד"} dataSearch={"1"} sortBy={sortBy} />
        <SearchProduct search={"חיפוש מוצר על פי שם"} dataSearch={"2"} sortBy={sortBy} />
        <SearchProduct search={"חיפוש מוצר באמצעות ספק"} dataSearch={"3"} sortBy={sortBy} />
      </Container>
      <Container fixed>
        <TableItems
          itemArray={itemArray}
          isUpdatePriceAll={isUpdatePriceAll}
          clickToUpdate={clickToUpdate}
        />
      </Container>
      {status ? <AlertMessage message={status.msg} key={status.key} /> : null}
    </div >
  );
}

export default App;
