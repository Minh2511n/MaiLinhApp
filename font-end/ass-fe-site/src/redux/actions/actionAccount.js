import AccountService from "../../services/AccountService";
import { ACCOUNT_SET } from "./actionType";
import { toast } from "react-toastify";

const service = new AccountService();

export const createAccount = (account, navigate) => async (dispatch) => {
  try {
    const res = await service.RegAccount(account);
    console.log(res.data);
    if (res.status === 201) {
      if (res.data) {
        // Kiểm tra res.data trước khi truy cập
        dispatch({
          type: ACCOUNT_SET,
          payload: res.data,
        });
        toast.success("Tạo tài khoản thành công");
      } else {
        toast.error("Không có dữ liệu trả về từ máy chủ");
      }
      navigate("/thongttk");
    }
  } catch (error) {
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};

export const login = (account, navigate) => async (dispatch) => {
  try {
    const res = await service.Login(account);
    console.log(res.data);
    if (res.status === 202) {
      if (res.data) {
        // Kiểm tra res.data trước khi truy cập
        dispatch({
          type: ACCOUNT_SET,
          payload: res.data,
        });
        toast.success("Đăng nhập thành công");
      } else {
        toast.error("Không có dữ liệu trả về từ máy chủ");
      }
      navigate("/thongttk");
    }
  } catch (error) {
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};
