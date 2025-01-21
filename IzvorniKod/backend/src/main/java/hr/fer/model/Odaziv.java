package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "odazivi") // Ensure the table name matches exactly
public class Odaziv {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "odazivId") // Map to the exact database column
    private Integer odazivId;

    @ManyToOne
    @JoinColumn(name = "korisnikId", referencedColumnName = "korisnikId")
    private Korisnik korisnik;

    @Column(name = "pitanjeText", nullable = false)
    private String pitanjeText;

    @Column(name = "odgovor", nullable = false)
    private Integer odgovor;

    @ManyToOne
    @JoinColumn(name = "pjesmaId", referencedColumnName = "pjesmaId")
    private Pjesma pjesma;

    @Column(name = "boja")
    private String boja;

    @Column(name = "preListening")
    private Boolean preListening;
}
