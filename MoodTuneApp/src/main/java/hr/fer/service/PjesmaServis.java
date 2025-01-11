package hr.fer.service;

import hr.fer.model.*;
import hr.fer.repository.EmocijaRepository;
import hr.fer.repository.PjesmaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PjesmaServis {
	
    @Autowired
    private PjesmaRepository pjesmaRepository;
    @Autowired
    private EmocijaRepository emocijaRepository;
    
    public List<Pjesma> getAllPjesme() {
    	return pjesmaRepository.findAll(); 
    }
    
    public List<Pjesma> getPjesmaByEmocija(String mood) {
        Emocija emocija = emocijaRepository.findByEmocija(mood)
                .orElseThrow(() -> new RuntimeException("Mood not found: " + mood));
        return pjesmaRepository.findByEmocija(emocija);
    }

    public void createPjesma(PjesmaRequestDTO songRequest) {
    	 Pjesma pjesma = new Pjesma();
         pjesma.setNaslov(songRequest.getNaslov());
         pjesma.setAutor(songRequest.getAutor());
         pjesma.setZanr(songRequest.getZanr());
         pjesma.setUrl(songRequest.getUrl());
         pjesma.setEmocija(songRequest.getEmocija());
         
         pjesmaRepository.save(pjesma);     }

    public void updatePjesma(int id, PjesmaRequestDTO songRequest) {
        Optional<Pjesma> existingPjesma = pjesmaRepository.findById(id);
        
        if (existingPjesma.isPresent()) {
            Pjesma pjesma = existingPjesma.get();
            pjesma.setNaslov(songRequest.getNaslov());
            pjesma.setAutor(songRequest.getAutor());
            pjesma.setZanr(songRequest.getZanr());
            pjesma.setUrl(songRequest.getUrl());
            
            Emocija emocija = emocijaRepository.findById(songRequest.getEmocija().getEmocijaId())
                    .orElseThrow(() -> new RuntimeException("Emocija not found"));
            pjesma.setEmocija(emocija);
            
            pjesmaRepository.save(pjesma);
        } else {
            throw new RuntimeException("Song not found");
        }
    }

    public void deletePjesma(int id) {
    	pjesmaRepository.deleteById(id); 
    }
}
