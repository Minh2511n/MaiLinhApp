package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.TuyenXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalTime;
import java.util.List;

public interface TuyenXeRepository extends JpaRepository<TuyenXe, Integer> {
}