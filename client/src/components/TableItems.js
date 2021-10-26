import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { orange } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Grid } from '@mui/material';
const useStyles = makeStyles({
    container: {
        borderRadius: "2.5% !important"
    },
    cell: {
        borderRight: "1px solid black !important",
        borderBottom: "1px solid black !important",
        fontWeight: "bold !important",
        fontSize: "25px !important",
        fontFamily: "cursive !important",

    },
    row: {
        borderRight: "1px solid black !important",
        borderBottom: "1px solid black !important",
        fontWeight: "bold !important",
        fontSize: "20px !important",
        fontFamily: "cursive !important",
    },
    image: {
        width: "50px",
        height: "50px"
    },
    btn: {
        fontSize: "15px",
        fontWeight: "bold !important",
        fontSize: "20px !important",
        fontFamily: "cursive !important",
        cursor: "pointer !important"
    }
});

function TableItems({ itemArray, isUpdatePriceAll, clickToUpdate }) {

    const [update, setPrice] = useState();
    const classes = useStyles();
    const HEADER_TITLE = ["ברקוד", "ספק", "שם המוצר", "מחיר", "תמונה", "מחיר חדש"];
    const colorHead = orange[500];
    const colorCell = orange[200];
    let dataObject = [];
    function calc() {
        for (let i = 0; i < itemsObject.length; i++) {
            if (itemsObject[i].newPrice != 0) {
                const result = Math.floor((itemsObject[i].newPrice * 100) / itemsObject[i].price);
                if (result - 100 > 0) {
                    itemsObject[i].precentage = `${result - 100}%`;
                    itemsObject[i].discount = "up";
                } else {
                    itemsObject[i].precentage = Math.abs(result - 100) + "%";
                    itemsObject[i].discount = "down";
                }
            }
        }
    }
    if (itemArray.length !== 0) {
        const sortByImage = itemArray.filter((item) => {
            if (item.image != "") {
                return item;
            }
        })
        dataObject = [...new Set([...sortByImage, ...itemArray])];
    }

    const submit = (id, after, discount) => {
        clickToUpdate(id, update, after, discount);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const itemsObject = dataObject.map(d => ({ ...d, precentage: 0 }));


    calc();
    return (

        <TableContainer component={Paper} className={classes.container}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead style={{ backgroundColor: colorHead }}>
                    <TableRow >
                        <TableCell align="center" className={classes.cell}>{HEADER_TITLE[0]}</TableCell>
                        <TableCell align="center" className={classes.cell}>{HEADER_TITLE[1]}</TableCell>
                        <TableCell align="center" className={classes.cell}>{HEADER_TITLE[2]}</TableCell>
                        <TableCell align="center" className={classes.cell}>{HEADER_TITLE[3]}</TableCell>
                        <TableCell align="center" className={classes.cell}>{HEADER_TITLE[4]}</TableCell>
                        <TableCell align="center" className={classes.cell}>{HEADER_TITLE[5]}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itemsObject.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}
                            hover={true}
                            style={{ backgroundColor: index % 2 === 0 ? "white" : colorCell }}
                        >
                            <TableCell component="th" scope="row" align="center" className={classes.row}>
                                {item._id}
                            </TableCell>
                            <TableCell align="center" className={classes.row}>{item.supplier}</TableCell>
                            <TableCell align="center" className={classes.row}>{item.name}</TableCell>
                            {isUpdatePriceAll ? <TableCell align="right" className={classes.row} style={{ display: "flex" }}>
                                <button className={classes.btn} onClick={() => {
                                    submit(item._id, item.price, item.discount);
                                }}>לעדכן</button>
                                <TextField
                                    id="outlined-number"
                                    defaultValue={item.price}
                                    type="number"
                                    style={{ width: "100px" }}
                                    onChange={updatePrice}
                                />
                            </TableCell> :
                                <TableCell align="right" className={classes.row}>{item.price} <span style={{ float: "left" }}>שקל</span></TableCell>}
                            <TableCell align="center" className={classes.row}>
                                {item.image ? <img src={item.image} className={classes.image} alt={item.name} /> : null}
                            </TableCell>
                            <TableCell align="right" className={classes.row}>
                                {item.newPrice === 0 && item.discount === "" ? null : <Grid item style={{ display: "grid" }}>
                                    <span>{item.newPrice}</span>
                                    <span style={{ backgroundColor: item.discount === "down" ? "blue" : "red" }}>{item.precentage + "" + item.discount}
                                    </span>
                                </Grid>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default TableItems



// <span>
//                                     <span style={{ float: "right" }}>
//                                         {Math.floor((item.newPrice * 100) / item.price) - 100 + "%" < 0 ? <ArrowDropDownIcon style={{ float: "right", backgroundColor: "blue" }} /> : <ArrowDropUpIcon style={{ float: "right", backgroundColor: "red" }} />}
//                                     </span>
//                                     {item.newPrice}</span>