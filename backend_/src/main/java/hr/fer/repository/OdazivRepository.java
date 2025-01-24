package hr.fer.repository;

import hr.fer.model.Odaziv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OdazivRepository extends JpaRepository<Odaziv, Integer> {
    List<Odaziv> findByKorisnikKorisnikId(int korisnikId);
    List<Odaziv> findByPitanjePitanjeId(int pitanjeId);
    List<Odaziv> findByPjesmaPjesmaId(int pjesmaId);
}
