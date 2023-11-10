package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link fpt.mailinhapp.domain.NoiTra}
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoiTraDto implements Serializable {
    Long id;
    String diaDiem;
    TuyenXeDto tuyenXe;
}