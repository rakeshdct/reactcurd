import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    hasErrors: false,
    adminListUserData: "",
    editCurrentUser: ""
};

const adminListUserSlice = createSlice({
    name: "adminListUserData",
    initialState,
    reducers: {
        getadminListUserData: (state) => {
            state.loading = true;
        },
        getadminListUserDataSuccess: (state, { payload }) => {
            state.adminListUserData = payload.adminListUserData;
            state.loading = false;
            state.hasErrors = false;
        },
        getadminListUserDataFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
        editCurrentUserdata: (state,action) => {
           state.editCurrentUser = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { editCurrentUserdata, getadminListUserData, getadminListUserDataSuccess, getadminListUserDataFailure } = adminListUserSlice.actions;

// A selector
export const adminListUserSelector = (state) => state.adminListUserData;

export default adminListUserSlice.reducer;

export function fetchadminListUserData() {
    return async (dispatch) => {
        dispatch(getadminListUserData());
        try {
            const response = await fetch("json/admin.json");
            const data = await response.json();
            dispatch(getadminListUserDataSuccess(data));
        } catch (error) {
            dispatch(getadminListUserDataFailure());
        }
    };
}
