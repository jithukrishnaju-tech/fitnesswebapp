import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid blue" : "",
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        curson: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={Icon} style={{ width: "40px", height: "40px" }} />
      <Typography>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
