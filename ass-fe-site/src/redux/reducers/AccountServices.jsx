import axios from "axios"
import { API_ACC } from "./constant";

export default class AccountService{
    insertaccount = async (account) =>{
        return await axios.post(API_ACC, account);
    };
}
