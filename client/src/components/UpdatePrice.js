import React from 'react'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import OpenModal from './components/OpenModal';
const useStyles = makeStyles({
    container: {
        display: "flex !important",
        justifyContent: "space-around !important",
    },
    button: {
        width: "300px !important",
        backgroundColor: "white !important",
        marginTop: "5% !important",
        marginBottom: "5% !important",
        fontSize: "20px !important",
        paddingBottom: "10px !important",
        paddingTop: "10px !important",
        borderRadius: "15px !important"
    }
});

function UpdatePrice({
    updatePrice, sortBy,
    handleOpen, handleClose, open, itemArray,
    isUpdatePriceAll, clickToUpdate,
}) {

    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item >
                <OpenModal
                    sortBy={sortBy}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    open={open}
                    itemArray={itemArray}
                    isUpdatePriceAll={isUpdatePriceAll}
                    clickToUpdate={clickToUpdate}
                    updatePrice={updatePrice}

                />
            </Grid >
            <Grid item >
                <Button onClick={updatePrice} variant="outlined" className={classes.button}>
                    לעדכן מחירים
                </Button>
            </Grid >
        </Grid>

    )
}

export default UpdatePrice
