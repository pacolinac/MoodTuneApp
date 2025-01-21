package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Odgovori")
public class Odgovor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer odgovorId;

    private Integer vrijednost;
}
