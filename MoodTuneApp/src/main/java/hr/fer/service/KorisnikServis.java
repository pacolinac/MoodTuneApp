package hr.fer.service;

import hr.fer.model.*;
import hr.fer.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisnikServis {
	
	 @Autowired
	    private UpraviteljRepository upraviteljRepository;
	 @Autowired
	    private KorisnikRepository korisnikRepository;
	 
    public String authenticateAdmin(UpraviteljLoginRequestDTO loginRequest) {
    	return upraviteljRepository.findByKorisnickoIme(loginRequest.getKorisnickoIme())
                .filter(upravitelj -> upravitelj.getLozinka().equals(loginRequest.getLozinka()))
                .map(upravitelj -> "Authentication successful")
                .orElse("Invalid username or password");
    }

    public List<Korisnik> getAllKorisnici() {
        return korisnikRepository.findAll();
    }
    
    public void saveKorisnik(KorisnikRequestDTO korisnikRequest) {
        Korisnik korisnik = new Korisnik();
        korisnik.setDob(korisnikRequest.getDob());
        Korisnik.Spol spol = Korisnik.Spol.valueOf(korisnikRequest.getSpol().name());
        korisnik.setSpol(spol);
        Korisnik.StanjePrije stanjePrije = Korisnik.StanjePrije.valueOf(korisnikRequest.getStanjePrije().name());
        korisnik.setStanjePrije(stanjePrije);
        Korisnik.StanjeZeljeno stanjeZeljeno = Korisnik.StanjeZeljeno.valueOf(korisnikRequest.getStanjeZeljeno().name());
        korisnik.setStanjeZeljeno(stanjeZeljeno);
        
        korisnikRepository.save(korisnik);
    }
}
