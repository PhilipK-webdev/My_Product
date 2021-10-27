import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Icon } from '@mui/material';
function Header() {
    const useStyles = makeStyles({
        link: {
            color: "white",
        },
    });
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 2, marginTop: "1%" }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href="#">
                        <Typography variant="h6" component="div" className={classes.link}>
                            <Icon><ExitToAppIcon /> </Icon> חזרה לדף הבית
                        </Typography>
                    </Link>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        ניהול מוצרים
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header

