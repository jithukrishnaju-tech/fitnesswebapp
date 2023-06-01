import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="blue" fontWeight="600" fontSize="26px">
        fitness club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="30px" mb={2}>
        Checkout the most effective exercises
      </Typography>
      <Button variant="contained" href="#exercise">
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="blue"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
