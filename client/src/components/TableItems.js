import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import items from "../items.json";
import { orange } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    container: {
        borderRadius: "2.5% !important"
    },
    cell: {
        borderRight: "1px solid black !important",
        borderBottom: "1px solid black !important",
        fontWeight: "bold !important",
        fontSize: "25px !important",
        fontFamily: "cursive !important"
    },
    row: {
        borderRight: "1px solid black !important",
        borderBottom: "1px solid black !important",
        fontWeight: "bold !important",
        fontSize: "20px !important",
        fontFamily: "cursive !important"
    },
    image: {
        width: "50px",
        height: "50px"
    }
});
function TableItems() {


    const classes = useStyles();
    const HEADER_TITLE = ["ברקוד", "ספק", "שם המוצר", "מחיר", "תמונה", "מחיר חדש"];
    const colorHead = orange[500];
    const colorCell = orange[200];
    const sortByImage = items.filter((item) => {
        if (item.image != "") {
            return item;
        }
    })
    const dataObject = [...new Set([...sortByImage, ...items])];
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
                    {dataObject.map((item, index) => (
                        <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}
                            hover={true}
                            style={{ backgroundColor: index % 2 === 0 ? "white" : colorCell }}
                        >
                            <TableCell component="th" scope="row" align="center" className={classes.row}>
                                {item._id}
                            </TableCell>
                            <TableCell align="center" className={classes.row}>{item.supplier}</TableCell>
                            <TableCell align="center" className={classes.row}>{item.name}</TableCell>
                            <TableCell align="center" className={classes.row}>{item.price}</TableCell>
                            <TableCell align="center" className={classes.row}>
                                {item.image ? <img src={item.image} className={classes.image} alt={item.name} /> : null}
                            </TableCell>
                            <TableCell align="center" className={classes.row}>{item.newPrice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableItems
