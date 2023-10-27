import { ADD_TO_CART } from "./sneakerTypes";
type sneakerAmount = {
	sneakerAmount: number;
};

const initialState: sneakerAmount = {
	sneakerAmount: 0,
};

const sneakerReducer = (
	previousState = initialState,
	{ type, quantity }: { type: string; quantity: number }
): sneakerAmount => {
	switch (type) {
		case ADD_TO_CART:
			return {
				...previousState,
				sneakerAmount: previousState.sneakerAmount + quantity,
			};
		default:
			return previousState;
	}
};

export default sneakerReducer;
