package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Emocije")
public class Emocija {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer emocijaId;

    private String emocija;
}
