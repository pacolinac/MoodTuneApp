package hr.fer.service;

import hr.fer.model.*;
import hr.fer.repository.PjesmaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class PjesmaServis {

    @Autowired
    private PjesmaRepository pjesmaRepository;

    /**
     * Dohvaća sve pjesme iz baze podataka.
     * @return popis svih pjesama.
     */
    public List<Pjesma> getAllPjesme() {
        return pjesmaRepository.findAll();
    }

    public Pjesma getRandomSong(Pjesma.Emocija mood) {
        List<Pjesma> pjesme = pjesmaRepository.findByEmocija(mood);
        if (pjesme.isEmpty()) {
            throw new RuntimeException("Nema pjesama s navedenim raspoloženjem: " + mood);
        }
        Random random = new Random();
        return pjesme.get(random.nextInt(pjesme.size()));
    }

    /**
     * Dohvaća pjesme prema pripadajućem raspoloženju.
     * @param mood raspoloženje povezano s pjesmama.
     * @return popis pjesama koje odgovaraju navedenom raspoloženju.
     */
    public List<Pjesma> getPjesmaByEmocija(Pjesma.Emocija mood) {
        return pjesmaRepository.findByEmocija(mood);
    }

    /**
     * Stvara novi unos pjesme u bazi podataka.
     * @param songRequest detalji pjesme koja se stvara.
     */
    public void createPjesma(PjesmaRequestDTO songRequest) {
        Pjesma pjesma = new Pjesma();
        pjesma.setNaslov(songRequest.getNaslov());
        pjesma.setAutor(songRequest.getAutor());
        pjesma.setZanr(songRequest.getZanr());
        pjesma.setUrl(songRequest.getUrl());
        pjesma.setEmocija(songRequest.getEmocija());

        pjesmaRepository.save(pjesma);
    }

    /**
     * Ažurira postojeći unos pjesme u bazi podataka.
     * @param id ID pjesme koja se ažurira.
     * @param songRequest ažurirani detalji pjesme.
     */
    public void updatePjesma(int id, PjesmaRequestDTO songRequest) {
        Pjesma pjesma = pjesmaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pjesma nije pronađena s ID-jem: " + id));

        pjesma.setNaslov(songRequest.getNaslov());
        pjesma.setAutor(songRequest.getAutor());
        pjesma.setZanr(songRequest.getZanr());
        pjesma.setUrl(songRequest.getUrl());
        pjesma.setEmocija(songRequest.getEmocija());

        pjesmaRepository.save(pjesma);
    }

    /**
     * Briše unos pjesme iz baze podataka.
     * @param id ID pjesme koja se briše.
     */
    public void deletePjesma(int id) {
        if (!pjesmaRepository.existsById(id)) {
            throw new RuntimeException("Pjesma nije pronađena s ID-jem: " + id);
        }
        pjesmaRepository.deleteById(id);
    }
}
