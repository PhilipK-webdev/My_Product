import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import items from "../items.json";
function TableItems() {
    const HEADER_TITLE = ["ברקוד", "ספק", "שם המוצר", "מחיר", "תמונה", "מחיר חדש"];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>{HEADER_TITLE[0]}</TableCell>
                        <TableCell align="center">{HEADER_TITLE[1]}</TableCell>
                        <TableCell align="center">{HEADER_TITLE[2]}</TableCell>
                        <TableCell align="center">{HEADER_TITLE[3]}</TableCell>
                        <TableCell align="center">{HEADER_TITLE[4]}</TableCell>
                        <TableCell align="center">{HEADER_TITLE[5]}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (

                        <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item._id}
                            </TableCell>
                            <TableCell align="center">{item.supplier}</TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.price}</TableCell>
                            <TableCell align="center">
                                {item.image ? <img src={item.image} style={{ width: "50px", height: "50px" }} alt={item.name} /> : null}
                            </TableCell>
                            <TableCell align="center">{item.newPrice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableItems
