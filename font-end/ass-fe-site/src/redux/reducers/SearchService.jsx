import axios from "axios";
import { API_SEARCH } from "./constant";

export default class SearchService {
  loadDataLocation = async () => {
    return await axios.get(API_SEARCH);
  };
}