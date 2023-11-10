package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.ChuyenXe;
import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.dto.ReqTimKhuHoi;
import fpt.mailinhapp.dto.ReqTimMotChieu;
import fpt.mailinhapp.repository.ChuyenXeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChuyenXeService {
    @Autowired
    ChuyenXeRepository dao;

    public List<ChuyenXeDto> timChuyenXe(String diemDi, String diemDen, LocalTime tgDi){
        List<ChuyenXe> entityList = dao.findByTuyenXe(diemDi, diemDen, tgDi);
        if(entityList.size()>0){
            List<ChuyenXeDto> dtoList = entityList.stream().map(item->{
                ChuyenXeDto dto = new ChuyenXeDto();
                BeanUtils.copyProperties(item,dto);
                return dto;
            }).collect(Collectors.toList());

            return dtoList;
        }
        return null;
    }



}
