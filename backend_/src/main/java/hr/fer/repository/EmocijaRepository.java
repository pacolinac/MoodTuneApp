package hr.fer.repository;

import hr.fer.model.Emocija;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmocijaRepository extends JpaRepository<Emocija, Integer> {
	Emocija findByEmocija(String mood);
}
