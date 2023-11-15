package fpt.mailinhapp.resp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqTimKhuHoi {
    private String diemDi;
    private String diemDen;
    private LocalTime tgDi1;
    private LocalTime tgDi2;
}
