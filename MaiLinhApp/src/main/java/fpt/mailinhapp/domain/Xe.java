package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.proxy.HibernateProxy;

import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "xe")
public class Xe {
    @Id
    @Column(name = "bien_so_xe", nullable = false)
    private String bienSoXe;

    @Column(name = "so_ghe")
    private Integer soGhe;

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_mua", nullable = false)
    private Date ngayMua;

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_dang_kiem")
    private Date ngayDangKiem;

    @Column(name = "gia_mua", nullable = false)
    private Long giaMua;

    @Column(name = "noi_mua")
    private String noiMua;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "anh_da_luu_id")
    private AnhDaLuu anhDaLuu;

    @ManyToMany
    @JoinTable(name = "anhXeChiTiet",
            joinColumns = @JoinColumn(name = "xe_bien_so_xe"),
            inverseJoinColumns = @JoinColumn(name = "anhDaLuus_id"))
    private Set<AnhDaLuu> anhXeChiTiet = new LinkedHashSet<>();

    @OneToMany(mappedBy = "xe", orphanRemoval = true)
    private Set<ChuyenXe> chuyenXes = new LinkedHashSet<>();

}