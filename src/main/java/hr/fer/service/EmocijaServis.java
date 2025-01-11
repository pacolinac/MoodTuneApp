package hr.fer.service;

import hr.fer.model.Emocija;
import hr.fer.model.EmocijaRequestDTO;
import hr.fer.repository.EmocijaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmocijaServis {

    @Autowired
    private EmocijaRepository emocijaRepository;

    public List<Emocija> getAllEmocije() {
        return emocijaRepository.findAll();
    }

}
