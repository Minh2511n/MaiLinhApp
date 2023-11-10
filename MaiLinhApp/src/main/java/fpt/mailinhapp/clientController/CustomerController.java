package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.TaiKhoanDto;
import fpt.mailinhapp.dto.ThanhVienDto;
import fpt.mailinhapp.service.CustomerService;
import fpt.mailinhapp.service.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v2/cus")
public class CustomerController {
    @Autowired
    CustomerService service;
    MapValidationErrorService errorService;

    @PatchMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @Validated @RequestBody ThanhVienDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var newDto = service.updateCustomers(id, dto);

        return new ResponseEntity<>(newDto, HttpStatus.OK);
    }

}
