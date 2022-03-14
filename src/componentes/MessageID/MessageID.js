import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageID = ({ purchaseID }) => {
    return (
    <Stack sx={{ width: "25%", marginTop: "30px"}} spacing={2}>
        <Alert severity="success">
            Gracias por tu compra! tu ID es: <b>{purchaseID}</b>
        </Alert>
    </Stack>
    );
};

export default MessageID;