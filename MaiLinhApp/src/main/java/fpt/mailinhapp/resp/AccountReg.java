package fpt.mailinhapp.resp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountReg {
    private String tenTaiKhoan;
    private String matkhau;
    private String hoten;
}
