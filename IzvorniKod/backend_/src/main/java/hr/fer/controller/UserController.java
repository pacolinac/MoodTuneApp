package hr.fer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import hr.fer.model.*;
import hr.fer.service.EmocijaServis;
import hr.fer.service.KorisnikServis;
import hr.fer.service.OdazivServis;
import hr.fer.service.PjesmaServis;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private EmocijaServis emocijaService;
    @Autowired
    private PjesmaServis pjesmaService;
    @Autowired
    private OdazivServis odazivService;
    @Autowired
    private KorisnikServis korisnikService;
    
    // POST /api/users
    // Spremi korisnika
    @PostMapping("/users")
    public Korisnik addKorisnik(@RequestBody KorisnikRequestDTO korisnikRequest) {
        return korisnikService.saveKorisnik(korisnikRequest);
    }

    // GET /api/emotions
    // Vrati sve emocije
    @GetMapping("/emotions")
    public List<Emocija> getEmocije() {
        return emocijaService.getAllEmocije();
    }

    // POST /api/responses
    // Šalji odaziv
    @PostMapping("/responses")
    public void postOdaziv(@RequestBody OdazivRequestDTO upitnikRequest) {
        odazivService.saveOdaziv(upitnikRequest);
    }

    // GET /api/songs?mood=motivirano
    //Vrati random pjesmu po emociji
    @GetMapping("/songs")
    public Pjesma getSongsByMood(@RequestParam String mood) {
        return pjesmaService.getPjesmaByEmocija(mood);
    }

}
