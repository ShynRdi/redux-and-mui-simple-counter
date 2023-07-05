import React, { useState } from "react";
import { increase, decrease } from "../redux/counter/counterAction";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Input,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
const Counter = (props) => {
  const [value, setValue] = useState(1);
  const counter = useSelector((state) => state.counterState.counter);
  const dispatch = useDispatch();
  return (
    <Box
      classes={{ root: "container" }}
      sx={{
        bgcolor: "red",
        color: "white",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        // // width: "100vw",
        width: "100%",
      }}
    >
      <Typography variant="h1">Counter - {counter}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Input
          classes={{ root: "input-border" }}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          sx={{
            color: "white",
            fontSize: "24px",
            borderColor: "white",
          }}
        />
        <Button
          variant="contained"
          classes={{ root: "button-border" }}
          onClick={() => {
            dispatch(increase(+value));
          }}
        >
          Increase
        </Button>
        <Button
          variant="contained"
          classes={{ root: "button-border" }}
          onClick={() => dispatch(decrease(+value))}
        >
          Decrease
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
