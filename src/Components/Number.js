import React from "react";
import { decreaseNumber, increaseNumber } from "../redux/number/numberAction";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Container, Typography } from "@mui/material";
// import { Button } from "bootstrap";
const Number = (props) => {
  const number = useSelector((state) => state.numberState.number);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        width: "100%",
      }}
    >
      <Typography variant="h1" sx={{ color: "red", paddingBottom: "1rem" }}>
        Number Logger - {number}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Button
          sx={{
            bgcolor: "red",
            ":hover": {
              bgcolor: "red",
            },
          }}
          variant="contained"
          onClick={() => {
            dispatch(increaseNumber());
          }}
        >
          Increase
        </Button>
        <Button
          sx={{
            bgcolor: "red",
            ":hover": {
              bgcolor: "red",
            },
          }}
          variant="contained"
          onClick={() => dispatch(decreaseNumber())}
        >
          Decrease
        </Button>
      </Box>
    </Box>
  );
};

export default Number;
