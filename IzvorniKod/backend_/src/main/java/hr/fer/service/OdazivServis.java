package hr.fer.service;

import hr.fer.model.*;
import hr.fer.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OdazivServis{
	
	@Autowired
    private OdazivRepository odazivRepository;
	@Autowired
    private KorisnikRepository korisnikRepository;
	@Autowired
    private PitanjeRepository pitanjeRepository;
	@Autowired
    private OdgovorRepository odgovorRepository;
	@Autowired
    private PjesmaRepository pjesmaRepository;

	
    public List<Odaziv> getOdazivi() {
        return odazivRepository.findAll();

    }

    public List<Odaziv> getAllResponses() {
        return odazivRepository.findAll();  
    }

    public void saveOdaziv(OdazivRequestDTO upitnikRequest) {
        System.out.println("Request received: " + upitnikRequest);
        Optional<Korisnik> korisnikOpt = korisnikRepository.findById(upitnikRequest.getKorisnikId());
        Optional<Pitanje> pitanjeOpt = pitanjeRepository.findById(upitnikRequest.getPitanjeId());
        Optional<Odgovor> odgovorOpt = odgovorRepository.findById(upitnikRequest.getOdgovorId());
        Optional<Pjesma> pjesmaOpt = (upitnikRequest.getPjesmaId() != null) 
                ? pjesmaRepository.findById(upitnikRequest.getPjesmaId()) 
                : Optional.empty();
        
        Odaziv odaziv = new Odaziv();
        odaziv.setKorisnik(korisnikOpt.get());
        odaziv.setPitanje(pitanjeOpt.get());
        odaziv.setOdgovor(odgovorOpt.get());
        odaziv.setPjesma(pjesmaOpt.orElse(null)); 
        odaziv.setBoja(upitnikRequest.getBoja());
        odaziv.setPreListening(upitnikRequest.getPreListening());

        odazivRepository.save(odaziv);
    }
}
