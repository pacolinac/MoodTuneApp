package hr.fer.repository;

import hr.fer.model.Emocija;
import hr.fer.model.Pjesma;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmocijaRepository extends JpaRepository<Emocija, Integer> {
	Optional<Emocija> findByEmocija(String mood);
}
