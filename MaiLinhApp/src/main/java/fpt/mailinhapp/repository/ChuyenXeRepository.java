package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.ChuyenXe;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalTime;
import java.util.List;

public interface ChuyenXeRepository extends PagingAndSortingRepository<ChuyenXe, Integer> {
    List<ChuyenXe> findByTuyenXe_DiemDiLikeAndTuyenXe_DiemDenLikeAndTuyenXe_TgDi(String diemDi, String diemDen, LocalTime tgDi);



}