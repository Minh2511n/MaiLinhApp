package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.Xe;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface XeRepository extends PagingAndSortingRepository<Xe, String> {
}