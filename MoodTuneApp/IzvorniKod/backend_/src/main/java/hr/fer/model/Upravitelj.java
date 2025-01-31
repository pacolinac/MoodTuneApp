package hr.fer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Upravitelji")
public class Upravitelj {
	@Id
	@Column(unique = true, nullable = false, columnDefinition = "VARCHAR(255) DEFAULT 'default_value'")
	private String korisnickoIme;
	@Column(nullable = false)
	private String lozinka;

}
