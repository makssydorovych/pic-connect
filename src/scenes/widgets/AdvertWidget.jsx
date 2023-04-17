import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="http://localhost:8080/assets/info4.jpeg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>RJCosmetics</Typography>
                <Typography color={medium}>rjcosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                RJ Cosmetics is a beauty company that offers a range of skincare and makeup products. They focus on using natural and organic ingredients to create high-quality and affordable beauty products for their customers. Their mission is to help people feel beautiful and confident in their own skin.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;