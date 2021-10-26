import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import SearchProduct from '../SearchProduct';
import TableItems from '../TableItems';
const useStyles = makeStyles({
    button: {
        width: "300px !important",
        backgroundColor: "white !important",
        marginTop: "5% !important",
        marginBottom: "5% !important",
        fontSize: "20px !important",
        paddingBottom: "15px !important",
        borderRadius: "15px !important"

    },
    container: {
        display: "flex !important",
        marginTop: "10px"

    },
});
const style = {
    position: 'absolute',
    left: '50%',
    top: '51%',
    width: 900,
    height: 600,
    transform: 'translate(-50%, -50%)',
    bgcolor: '#373747',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowX: 'scroll'
};
function OpenModal({ sortBy, handleOpen, handleClose, open, itemArray,
    isUpdatePriceAll, clickToUpdate, updatePrice }) {
    const classes = useStyles();
    return (
        <div>
            <Button variant="outlined" className={classes.button} onClick={handleOpen}>
                עדכון מחיר ע"י הספק
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Grid container className={classes.container}>
                            <Grid item>
                                <SearchProduct search={"חיפוש מוצר באמצעות ספק"} dataSearch={"3"} sortBy={sortBy} />
                            </Grid>
                            <Grid item>
                                <Button onClick={updatePrice} variant="outlined" className={classes.button}>
                                    לעדכן מחירים
                                </Button>
                            </Grid>

                        </Grid>
                        <TableItems
                            itemArray={itemArray}
                            isUpdatePriceAll={isUpdatePriceAll}
                            clickToUpdate={clickToUpdate}
                        />

                    </Box>

                </Fade>


            </Modal>
        </div>
    );
}

export default OpenModal
