package hr.fer.service;

import hr.fer.model.*;
import hr.fer.repository.EmocijaRepository;
import hr.fer.repository.PjesmaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class PjesmaServis {
	
    @Autowired
    private PjesmaRepository pjesmaRepository;
    @Autowired
    private EmocijaRepository emocijaRepository;
    
    //Vrati sve emocije
    public List<Pjesma> getAllPjesme() {
    	return pjesmaRepository.findAll(); 
    }
    
    //Vrati random pjesmu po emociji
    public Pjesma getPjesmaByEmocija(String mood) {
    	Emocija emocija = emocijaRepository.findByEmocija(mood);
        if (emocija == null) {
            throw new RuntimeException("Mood not found: " + mood);
        }
        List<Pjesma> pjesme = pjesmaRepository.findByEmocija(emocija);
        if (pjesme.isEmpty()) {
            throw new RuntimeException("No songs found for mood: " + mood);
        }
        int randomIndex = new Random().nextInt(pjesme.size());
        return pjesme.get(randomIndex);    
        }

    public void createPjesma(PjesmaRequestDTO songRequest) {
    	 Pjesma pjesma = new Pjesma();
         pjesma.setNaslov(songRequest.getNaslov());
         pjesma.setAutor(songRequest.getAutor());
         pjesma.setZanr(songRequest.getZanr());
         pjesma.setUrl(songRequest.getUrl());
         Emocija emocija = emocijaRepository.findByEmocija(songRequest.getEmocija());
         if (emocija != null) {
             pjesma.setEmocija(emocija);
         } else {
             throw new RuntimeException("Emocija not found for: " + songRequest.getEmocija());
         }         
         pjesmaRepository.save(pjesma);     }

    public void updatePjesma(int id, PjesmaRequestDTO songRequest) {
        Optional<Pjesma> existingPjesma = pjesmaRepository.findById(id);
        System.out.println(id + " " + songRequest);
        if (existingPjesma.isPresent()) {
            Pjesma pjesma = existingPjesma.get();
            pjesma.setNaslov(songRequest.getNaslov());
            pjesma.setAutor(songRequest.getAutor());
            pjesma.setZanr(songRequest.getZanr());
            pjesma.setUrl(songRequest.getUrl());
            
            Emocija emocija = emocijaRepository.findByEmocija(songRequest.getEmocija());
            if (emocija != null) {
            	pjesma.setEmocija(emocija);
            	} else {
            		throw new RuntimeException("Emocija not found for: " + songRequest.getEmocija());
            	}  
            pjesmaRepository.save(pjesma);
        } else {
            throw new RuntimeException("Song not found");
        }
    }

    public void deletePjesma(int id) {
    	pjesmaRepository.deleteById(id); 
    }
}
