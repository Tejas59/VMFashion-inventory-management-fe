import { createSlice } from "@reduxjs/toolkit";

// const initialState: DashboardDataState = {
//   value: {
//     employeesList: [],
//     selectedEmployee: null,
//     isSelectedEmpBreadcrumbActive: false,
//   },
// };

const initialState = {};

export const DashboardDataSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {},
});

export default DashboardDataSlice.reducer;
