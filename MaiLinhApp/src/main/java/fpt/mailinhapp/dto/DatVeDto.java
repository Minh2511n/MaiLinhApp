package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link fpt.mailinhapp.domain.DatVe}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DatVeDto implements Serializable {
    Long maVe;
    Integer soLuong;
    Float tongTien;
    TaiKhoanDto taiKhoan;
    ChuyenXeDto chuyenXe;
    List<VeXeChiTietDto> veXeChiTiets;
}