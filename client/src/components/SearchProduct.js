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
        <Grid container mt-2="true">
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
                    }}
                >
                    <TextField color={"primary"} onChange={displayBySearch} />
                </Box>
            </Grid>

        </Grid>
    );
}

export default SearchProduct
