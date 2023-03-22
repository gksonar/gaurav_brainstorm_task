import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CapsuleDataResponse } from "@/pages";

// Define a type for the slice state
interface State {
  value: CapsuleDataResponse[] | [];
}

// Define the initial state using that type
const initialState: State = {
  value: [],
};

export const employeesSlice = createSlice({
  name: "capsules",
  initialState,
  reducers: {
    setCapsule: (state, action: PayloadAction<CapsuleDataResponse[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setCapsule } = employeesSlice.actions;

export default employeesSlice.reducer;
