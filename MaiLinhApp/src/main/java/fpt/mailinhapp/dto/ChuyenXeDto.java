package fpt.mailinhapp.dto;

import fpt.mailinhapp.domain.NhanVien;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link fpt.mailinhapp.domain.ChuyenXe}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChuyenXeDto implements Serializable {
    Integer maChuyen;
    String soKhach;
    NhanVienDto taiXe;
    NhanVien phuXe;
    TuyenXeDto tuyenXe;
    XeDto xe;
}