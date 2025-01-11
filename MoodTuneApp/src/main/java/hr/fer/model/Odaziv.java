package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Odazivi")
public class Odaziv {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer odazivId;

    @ManyToOne
    @JoinColumn(name = "KorisnikId", referencedColumnName = "KorisnikId")
    private Korisnik korisnik;

    @ManyToOne
    @JoinColumn(name = "PitanjeId", referencedColumnName = "PitanjeId")
    private Pitanje pitanje;

    @ManyToOne
    @JoinColumn(name = "OdgovorId", referencedColumnName = "OdgovorId")
    private Odgovor odgovor;

    @ManyToOne
    @JoinColumn(name = "PjesmaId", referencedColumnName = "PjesmaId")
    private Pjesma pjesma;

    private String boja;

    @Column(name = "PreListening")
    private Boolean preListening;
}
