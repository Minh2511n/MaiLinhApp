import { LOCATION_SET } from "../actions/actionType";

const initialState = {
  dataLoca: [],
};

const SearchReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_SET:
      return { ...state, dataLoca: payload };

    default:
      return state;
  }
};
export default SearchReducers;
