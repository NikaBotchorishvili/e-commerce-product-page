import { createSlice } from "@reduxjs/toolkit";

type stateType = {
	amount: number;
};

const initialState: stateType = {
	amount: Number(window.localStorage.getItem("amount")) | 0,
};
export const amountSlice = createSlice({
	name: "sneakerAmount",
	initialState: initialState,
	reducers: {
		incrementByAmount: (state, action) => {
			const newAmount = state.amount + action.payload;
			localStorage.setItem("amount", newAmount);
			return { ...state, amount: newAmount };
		},
		reset: (state) => {
			localStorage.removeItem("amount");
			return { ...state, amount: 0 };
		},
	},
});

export const { incrementByAmount, reset } = amountSlice.actions;
export default amountSlice.reducer;
