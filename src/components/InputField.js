import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

const grey = "#787878";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey,
      color: grey,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey,
      color: grey,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: grey,
      color: grey,
    },
  },
});

function InputField(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <TextField
      id="outlined-basic"
      sx={{ input: { color: grey } }}
      InputLabelProps={{ style: { color: grey } }}
      className={classes.root}
      onChange={(event) => dispatch(props.setter(event.target.value))}
      label={props.label}
      variant="outlined"
    />
  );
}

export default InputField;
