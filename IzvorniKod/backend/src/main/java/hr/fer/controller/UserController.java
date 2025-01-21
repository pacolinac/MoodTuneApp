package hr.fer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import hr.fer.model.*;
import hr.fer.service.KorisnikServis;
import hr.fer.service.OdazivServis;
import hr.fer.service.PjesmaServis;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private PjesmaServis pjesmaService;
    @Autowired
    private OdazivServis odazivService;
    @Autowired
    private KorisnikServis korisnikService;
    
    // POST /api/users
    // Spremi korisnika
    @PostMapping("/users")
    public void addKorisnik(@RequestBody KorisnikRequestDTO korisnikRequest) {
        korisnikService.saveKorisnik(korisnikRequest);
    }


    // POST /api/responses
    // Šalji odaziv
    @PostMapping("/responses")
    public void postOdaziv(@RequestBody OdazivRequestDTO upitnikRequest) {
        odazivService.saveOdaziv(upitnikRequest);
    }

    // GET /api/songs?mood=happy
    // Vrati pjesmu po moodu
    @GetMapping("/songs")
    public List<Pjesma> getSongsByMood(@RequestParam Pjesma.Emocija mood) {
        return pjesmaService.getPjesmaByEmocija(mood);
    }

}
