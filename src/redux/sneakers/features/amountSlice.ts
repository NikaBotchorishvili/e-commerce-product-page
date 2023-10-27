import { createSlice } from "@reduxjs/toolkit";

type sneakerType = {
	sneakerAmount: number;
};

const initialState: sneakerType = {
	sneakerAmount: 0,
};
export const amountSlice = createSlice({
	name: "sneakerAmount",
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.sneakerAmount += 1;
		},
		decrement: (state) => {
			state.sneakerAmount -= 1;
		},
		incrementByAmount: (state, action) => {
			state.sneakerAmount += action.payload
		}
	},
});



export const { increment, decrement, incrementByAmount } = amountSlice.actions;
export default amountSlice.reducer;
