import axios from "axios";
import { API_ACC } from "./constant";

export default class AccountService {
  RegAccount = async (account) => {
    return await axios.post(API_ACC + "/reg", account);
  };
  Login = async (account) => {
    return await axios.post(API_ACC, account);
  };
}
