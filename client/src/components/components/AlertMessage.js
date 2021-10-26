import React, { useState } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
});

function AlertMessage({ message }) {
    const [open, setOpen] = useState(true);
    function handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}

            >
                <Alert sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default AlertMessage
