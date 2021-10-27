import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
function SearchProduct({ search, dataSearch, sortBy }) {
    const displayBySearch = (e) => {
        sortBy(e.target.value, dataSearch);
    }
    return (
        <Grid container >
            <Grid item>
                <Box
                    sx={{
                        width: 150,
                        maxWidth: '100%',
                        backgroundColor: "white",
                        m: 2,
                    }}
                />
                <Typography variant="h6" component="div">
                    {search}
                </Typography>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        width: 150,
                        maxWidth: '100%',
                        backgroundColor: "white",
                        m: 1,
                        borderRadius: '15px',
                        marginTop: "15px"
                    }}
                >
                    <TextField color={"primary"} onChange={displayBySearch} />
                </Box>
            </Grid>
        </Grid>
    );
}

export default SearchProduct
