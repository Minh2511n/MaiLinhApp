package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.NoiTra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoiTraRepository extends JpaRepository<NoiTra, Long> {
    List<NoiTra> findByTuyenXe_MaTuyenXe(Integer maTuyenXe);

}