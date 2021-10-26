import React, { useState } from 'react'
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from "@material-ui/core/styles";
import { orange, blue, red } from '@mui/material/colors';
const useStyles = makeStyles({
    container: {
        borderRadius: "2.5% !important"
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
    },
    spanCurrency: {
        float: "left"
    },
    priceDiv: {
        display: "grid"
    }
});
function TableBodyItem({ itemArray, isUpdatePriceAll, clickToUpdate, }) {

    const classes = useStyles();
    const colorCell = orange[200];
    const colorDown = blue[200];
    const colorUp = red[400];
    const [update, setPrice] = useState();
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
                        <TableCell align="right" className={classes.row}>{item.price} <span className={classes.spanCurrency}>שקל</span></TableCell>}
                    <TableCell align="center" className={classes.row}>
                        {item.image ? <img src={item.image} className={classes.image} alt={item.name} /> : null}
                    </TableCell>
                    <TableCell align="right" className={classes.row}>
                        {item.newPrice === 0 && item.discount === "" ? null : <Grid item className={classes.priceDiv}>
                            <span>{item.newPrice}</span>
                            <span style={{ backgroundColor: item.discount === "down" ? colorDown : colorUp }}>{item.precentage + "" + item.discount}
                            </span>
                        </Grid>}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default TableBodyItem
