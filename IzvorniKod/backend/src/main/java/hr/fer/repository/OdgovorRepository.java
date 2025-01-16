package hr.fer.repository;

import hr.fer.model.Odgovor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OdgovorRepository extends JpaRepository<Odgovor, Integer> {
}
