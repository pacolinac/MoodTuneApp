package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Pjesme")
public class Pjesma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pjesmaId;
    private String naslov;
    private String autor;
    private String zanr;
    private String url;

    @ManyToOne
    @JoinColumn(name = "EmocijaId", referencedColumnName = "EmocijaId")
    private Emocija emocija;
}
