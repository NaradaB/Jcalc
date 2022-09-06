import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";
import { setActivity } from "../features/userInputSlice";

const grey = "#787878";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    color: grey,
    position: "relative",
    border: "1px solid" + grey,
    padding: "10px 26px 10px 12px",
  },
}));

function ActivityLevel() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setActivity(event.target.value));
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          input={<BootstrapInput></BootstrapInput>}
          onChange={handleChange}
        >
          <MenuItem value={1.2}>Sedentary</MenuItem>
          <MenuItem value={1.375}>Lightly Active </MenuItem>
          <MenuItem value={1.55}>Moderately Active </MenuItem>
          <MenuItem value={1.725}>Very Active </MenuItem>
          <MenuItem value={1.9}>Extremely Active </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ActivityLevel;
