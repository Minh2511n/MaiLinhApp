import SearchService from "../reducers/SearchService";
import { LOCATION_SET } from "./actionType";

const service = SearchService();

export const loadDataLoca = async (dispatch) => {
  try {
    const res = await service.loadDataLocation();

    if (res === 201) {
      dispatch({
        type: LOCATION_SET,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
