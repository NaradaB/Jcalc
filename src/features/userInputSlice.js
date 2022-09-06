import { createSlice } from "@reduxjs/toolkit";

const intitialStateValue = {
  age: undefined,
  gender: undefined,
  weight: undefined,
  height: undefined,
  activity: undefined,
};
export const userInputSlice = createSlice({
  name: "user",
  initialState: { value: intitialStateValue },
  reducers: {
    setAge: (state, action) => {
      state.value.age = action.payload;
    },
    setGender: (state, action) => {
      state.value.gender = action.payload;
    },
    setWeight: (state, action) => {
      state.value.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.value.height = action.payload;
    },
    setActivity: (state, action) => {
      state.value.activity = action.payload;
    },
  },
});

export const { setAge, setGender, setWeight, setHeight, setActivity } =
  userInputSlice.actions;

export default userInputSlice.reducer;
