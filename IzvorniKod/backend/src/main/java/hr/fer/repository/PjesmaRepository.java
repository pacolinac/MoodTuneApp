package hr.fer.repository;

import hr.fer.model.Pjesma.Emocija;
import hr.fer.model.Pjesma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PjesmaRepository extends JpaRepository<Pjesma, Integer> {
    List<Pjesma> findByZanr(String zanr);
    List<Pjesma> findByEmocija(Pjesma.Emocija emocija);
}
