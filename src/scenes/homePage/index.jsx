import React from 'react';
import Box from "@mui/material/Box";
import Navbar from "../navbar";
import {useMediaQuery} from "@mui/material";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
    return <Box>
        <Navbar/>
    </Box>
};

export default HomePage;