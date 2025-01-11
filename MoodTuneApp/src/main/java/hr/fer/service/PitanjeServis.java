package hr.fer.service;

import hr.fer.model.*;
import hr.fer.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PitanjeServis {
	
	@Autowired
    private PitanjeRepository pitanjeRepository;
	
	public List<Pitanje> getAllPitanja() {
        return pitanjeRepository.findAll();
    }

	public void createPitanje(PitanjeRequestDTO questionRequest) {
        Pitanje pitanje = new Pitanje();
        pitanje.setTekst(questionRequest.getTekst());
        pitanjeRepository.save(pitanje);
    }

	public void updatePitanje(int id, PitanjeRequestDTO questionRequest) {
        Optional<Pitanje> optionalPitanje = pitanjeRepository.findById(id);
        if (optionalPitanje.isPresent()) {
            Pitanje pitanje = optionalPitanje.get(); 
            pitanje.setTekst(questionRequest.getTekst()); 
            pitanjeRepository.save(pitanje); 
        } else {
            throw new IllegalArgumentException("Question with id " + id + " not found.");
        }
    }

    public void deletePitanje(int id) {
    	if (pitanjeRepository.existsById(id)) {
            pitanjeRepository.deleteById(id); 
        } else {
            throw new IllegalArgumentException("Question with id " + id + " not found.");
        }    }
}
