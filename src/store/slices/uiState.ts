import { createSlice } from "@reduxjs/toolkit";

type ToastType = "ERROR" | "SUCCESS" | "WARNING";
interface IIntial {
  type: ToastType;
  label: string;
  showSnackbar: boolean;
}
const initialState: IIntial = {
  type: "SUCCESS",
  label: "",
  showSnackbar: false,
};
const uiStateSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    toggleToastOpen: (
      state,
      { payload }: { payload: { label: string; type: ToastType } }
    ) => {
      state.showSnackbar = true;
      state.label = payload.label;
      state.type = payload.type;
    },
    toggleToastClose: (state) => {
      state.showSnackbar = false;
    },
  },
});

export default uiStateSlice.reducer;
export const { toggleToastOpen, toggleToastClose } = uiStateSlice.actions;
