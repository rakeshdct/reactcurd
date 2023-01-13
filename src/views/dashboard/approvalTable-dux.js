import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    hasErrors: false,
    approvalData: "",
    editCurrentProfile: ""
};

const approvalDataSlice = createSlice({
    name: "approvalData",
    initialState,
    reducers: {
        getapprovalData: (state) => {
            state.loading = true;
        },
        getapprovalDataSuccess: (state, { payload }) => {
            state.approvalData = payload.approvalData;
            state.loading = false;
            state.hasErrors = false;
        },
        getapprovalDataFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
        editCurrentProfiledata: (state,action) => {
           state.editCurrentProfile = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { editCurrentProfiledata, getapprovalData, getapprovalDataSuccess, getapprovalDataFailure } = approvalDataSlice.actions;

// A selector
export const approvalDataSelector = (state) => state.approvalData;

export default approvalDataSlice.reducer;

export function fetchapprovalData() {
    return async (dispatch) => {
        dispatch(getapprovalData());
        try {
            const response = await fetch("json/approvals.json");
            const data = await response.json();
            dispatch(getapprovalDataSuccess(data));
        } catch (error) {
            dispatch(getapprovalDataFailure());
        }
    };
}
