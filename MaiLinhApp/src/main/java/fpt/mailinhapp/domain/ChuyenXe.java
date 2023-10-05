package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.proxy.HibernateProxy;

import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "chuyen_xe")
public class ChuyenXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_chuyen", nullable = false)
    private Integer maChuyen;

    @Column(name = "so_khach")
    private String soKhach;

    @ManyToOne
    @JoinColumn(name = "tai_xe")
    private NhanVien taiXe;

    @ManyToOne
    @JoinColumn(name = "phu_xe")
    private NhanVien phuXe;

    @ManyToOne
    @JoinColumn(name = "tuyen_xe")
    private TuyenXe tuyenXe;


    @ManyToOne
    @JoinColumn(name = "xe")
    private Xe xe;

    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) return false;
        ChuyenXe chuyenXe = (ChuyenXe) o;
        return getMaChuyen() != null && Objects.equals(getMaChuyen(), chuyenXe.getMaChuyen());
    }

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
    }
}