package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.resp.ReqTimKhuHoi;
import fpt.mailinhapp.resp.ReqTimMotChieu;
import fpt.mailinhapp.resp.Return2List;
import fpt.mailinhapp.service.ChuyenXeService;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.TuyenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v2/search")
public class SearchController {
    @Autowired
    ChuyenXeService service;
    @Autowired
    TuyenXeService tuyenXeService;
    @Autowired
    MapValidationErrorService errorService;

    @RequestMapping("one-way")
    public ResponseEntity findOneWayTicket(@Validated @RequestBody ReqTimMotChieu data, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        List<ChuyenXeDto> dto = service.timChuyenXe(data.getDiemDi(), data.getDiemDen(), data.getTgDi());

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @RequestMapping("return")
    public ResponseEntity findReturnTicket(@Validated @RequestBody ReqTimKhuHoi data, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        List<ChuyenXeDto> dto = service.timChuyenXe(data.getDiemDi(), data.getDiemDen(), data.getTgDi1());
        List<ChuyenXeDto> dto2 = service.timChuyenXe(data.getDiemDen(), data.getDiemDi(), data.getTgDi2());

        Return2List newList = new Return2List(dto,dto2);

        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity loadLocation(){
        var data = tuyenXeService.loadLocation();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
