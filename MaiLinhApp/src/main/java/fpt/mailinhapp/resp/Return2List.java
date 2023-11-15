package fpt.mailinhapp.resp;



import fpt.mailinhapp.dto.ChuyenXeDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Return2List {
    private List<ChuyenXeDto> dto, dto2;
}
