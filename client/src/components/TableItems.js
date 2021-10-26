import React from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import HeadItem from './components/HeadItem';
import TableBodyItem from './components/TableBodyItem';

const useStyles = makeStyles({
    container: {
        borderRadius: "2.5% !important"
    }
});

function TableItems({ itemArray, isUpdatePriceAll, clickToUpdate }) {

    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <HeadItem />
                <TableBodyItem
                    itemArray={itemArray}
                    isUpdatePriceAll={isUpdatePriceAll}
                    clickToUpdate={clickToUpdate}
                />
            </Table>
        </TableContainer>

    );
}

export default TableItems
