package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "noi_tra")
public class NoiTra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "dia_diem")
    private String diaDiem;

    @ManyToOne
    @JoinColumn(name = "tuyen_xe_ma_chuyen_xe")
    private TuyenXe tuyenXe;

}