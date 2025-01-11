package hr.fer.model;

import java.util.*;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Korisnici")
public class Korisnik {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int korisnikId;
	
	private int dob;
	
	@Enumerated(EnumType.STRING)
	private Spol spol;
    
	 @Enumerated(EnumType.STRING)
	private StanjePrije stanjePrije;
    
    @Enumerated(EnumType.STRING)
	private StanjeZeljeno stanjeZeljeno;
    
    public enum Spol {muško,žensko,ostalo};
    
    public enum StanjePrije {tuzan,sretan,motiviran,smiren,drugo};
    
    public enum StanjeZeljeno {tuzan,sretan,motiviran,smiren};
}
