import { configureStore, combineReducers } from "@reduxjs/toolkit";

import adminListUserSlice from "../views/dashboard/adminListUser-dux";
import approvalDataSlice from "../views/dashboard/approvalTable-dux";


export const rootReducer = combineReducers({
  adminListUserData: adminListUserSlice,
  approvalData: approvalDataSlice,
})

export default configureStore({
  reducer: rootReducer,
});