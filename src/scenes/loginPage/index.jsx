import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(min-width: 1000px)");
    return <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
            <Typography
                fontWeight="bold"
                fontSize="32px"
                color="primary"
            >PIC-CONNECT
            </Typography>
        </Box>
        <Box
            width={isMobileScreens ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
        >
            <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
                Welcome to PIC-CONNECT, social media for share pictures.
            </Typography>
        </Box>
    </Box>
};

export default LoginPage;