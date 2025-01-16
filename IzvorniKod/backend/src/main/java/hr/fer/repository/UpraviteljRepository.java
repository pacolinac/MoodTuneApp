package hr.fer.repository;

import hr.fer.model.Upravitelj;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UpraviteljRepository extends JpaRepository<Upravitelj, String> {
	Optional<Upravitelj> findByKorisnickoIme(String korisnickoIme);
}
