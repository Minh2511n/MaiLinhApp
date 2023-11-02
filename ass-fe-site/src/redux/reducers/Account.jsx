
import { toast } from 'react-toastify';
import AccountSPService from '../../services/AccountSPService'; // Thay đổi đường dẫn đến dịch vụ của bạn
import { ACCOUNT_SET } from './actionTypes'; // Thay đổi đường dẫn đến tệp action types của bạn

const accountService = new AccountSPService();

export const addAcc = (userData) => async (dispatch) => {
  try {
    // Gửi yêu cầu đăng ký tài khoản bằng dịch vụ của bạn
    const response = await accountService.registerAccount(userData);

    if (response && response.status === 201 && response.data) {
      // Nếu đăng ký thành công, cập nhật dữ liệu tài khoản vào Redux store
      dispatch({
        type: ACCOUNT_SET,
        payload: response.data,
      });

      toast.success('Đăng ký thành công');
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Lỗi đăng ký:', error);
    toast.error(error.response ? error.response.data.message : error.message);
  }
};
