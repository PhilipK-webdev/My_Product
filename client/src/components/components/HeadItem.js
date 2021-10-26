import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { orange } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    cell: {
        borderRight: "1px solid black !important",
        borderBottom: "1px solid black !important",
        fontWeight: "bold !important",
        fontSize: "25px !important",
        fontFamily: "cursive !important",
    },

});
function HeadItem() {
    const colorHead = orange[500];
    const HEADER_TITLE = ["ברקוד", "ספק", "שם המוצר", "מחיר", "תמונה", "מחיר חדש"];
    const classes = useStyles();
    return (
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
    )
}

export default HeadItem
