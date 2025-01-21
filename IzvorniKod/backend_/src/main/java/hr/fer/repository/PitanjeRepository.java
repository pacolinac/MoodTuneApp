package hr.fer.repository;

import hr.fer.model.Pitanje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PitanjeRepository extends JpaRepository<Pitanje, Integer> {
}
