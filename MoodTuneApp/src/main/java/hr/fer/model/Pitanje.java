package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Pitanja")
public class Pitanje {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pitanjeId;

    private String tekst;
    
}
