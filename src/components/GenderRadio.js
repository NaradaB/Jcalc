import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { grey } from "@mui/material/colors";

import { useDispatch } from "react-redux";
import { setGender } from "../features/userInputSlice";

function GenderRadio() {
  const [value, setValue] = React.useState("female");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setGender(event.target.value));
    setValue(event.target.value);
  };
  return (
    <div>
      {" "}
      <FormControl>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <div className="flex-row">
            <FormControlLabel
              sx={{
                color: grey[600],
              }}
              value="female"
              control={
                <Radio
                  sx={{
                    color: grey[600],
                  }}
                />
              }
              label="Female"
            />
            <FormControlLabel
              sx={{
                color: grey[600],
              }}
              value="male"
              control={
                <Radio
                  sx={{
                    color: grey[600],
                  }}
                />
              }
              label="Male"
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default GenderRadio;
