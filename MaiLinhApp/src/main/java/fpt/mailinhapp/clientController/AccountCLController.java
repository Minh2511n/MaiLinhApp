package fpt.mailinhapp.clientController;

import fpt.mailinhapp.domain.ThanhVien;
import fpt.mailinhapp.domain.VaiTro;
import fpt.mailinhapp.dto.AccountReg;
import fpt.mailinhapp.dto.TaiKhoanDto;
import fpt.mailinhapp.dto.ThanhVienDto;
import fpt.mailinhapp.service.CustomerService;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.TaiKhoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v2/acc")
@CrossOrigin
public class AccountCLController {
    @Autowired
    TaiKhoanService service;
    @Autowired
    MapValidationErrorService errorService;
    @Autowired
    CustomerService customerService;

    @PostMapping("reg")
    public ResponseEntity createAcc(@Validated @RequestBody AccountReg dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        TaiKhoanDto tkDto = new TaiKhoanDto(dto.getUsername(), dto.getPassword(), VaiTro.ThanhVien);


        ThanhVien tv = new ThanhVien();
        tv.setId(dto.getUsername());
        tv.setHoTen(dto.getName());
        customerService.insertCustomers(tv);
        var newDto = service.insertAccount(tkDto);

        return new ResponseEntity<>(newDto, HttpStatus.CREATED);
    }
    @PostMapping
    public ResponseEntity loginAcc(@Validated @RequestBody TaiKhoanDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        var newDto = service.CheckLogin(dto);

        return new ResponseEntity<>(newDto,HttpStatus.ACCEPTED);
    }


}
