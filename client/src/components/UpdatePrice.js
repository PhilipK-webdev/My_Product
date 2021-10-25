import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
function UpdatePrice({ updatePrice }) {
    return (
        <Grid container style={{
            display: "flex",
            justifyContent: "space-around",
        }}>
            <Grid item >
                <Button variant="outlined" style={{ width: 300, backgroundColor: 'white', marginTop: "5%", marginBottom: "5%", fontSize: "20px" }}>
                    עדכון מחיר ע"י הספק
                </Button>
            </Grid >
            <Grid item >
                <Button onClick={updatePrice} variant="outlined" style={{ width: 300, backgroundColor: 'white', marginTop: "5%", marginBottom: "5%", fontSize: "20px" }}>
                    לעדכן מחירים
                </Button>
            </Grid >
        </Grid>

    )
}

export default UpdatePrice
