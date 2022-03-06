import { Button } from "@mui/material";
import React from "react";

const ButtonPrm = (props = "black") => {
  return (
    <Button
      sx={{
        padding: "0px",
        minWidth: "35px",
        minHeight: "35px",
        borderRadius: "8px",
        margin: "10px 7px",
        color: props.color,
        border: `1px solid ${props.color}`,
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonPrm;
