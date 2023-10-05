package fpt.mailinhapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "dat_ve")
public class DatVe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_ve", nullable = false)
    private Long maVe;

    @Column(name = "so_luong", nullable = false)
    private Integer soLuong;

    @Column(name = "tong_tien", nullable = false)
    private Float tongTien;

    @ManyToOne
    @JoinColumn(name = "tai_khoan")
    private TaiKhoan taiKhoan;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "chuyen_xe")
    private ChuyenXe chuyenXe;

    @JsonIgnore
    @OneToMany(mappedBy = "maVe", orphanRemoval = true)
    private List<VeXeChiTiet> veXeChiTiets = new ArrayList<>();

}