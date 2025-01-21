package hr.fer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import hr.fer.model.*;
import hr.fer.service.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private PjesmaServis songService;
    @Autowired
    private KorisnikServis userService;
    @Autowired
    private OdazivServis responseService;


    // POST /api/admin/login
    // Šalji prijavu admina, vrati odobrenje
    @PostMapping("/login")
    public String login(@RequestBody UpraviteljLoginRequestDTO loginRequest) {
        return userService.authenticateAdmin(loginRequest);
    }


    // GET /api/admin/songs
    // Vrati sve pjesme
    @GetMapping("/allsongs")
    public List<Pjesma> getAllSongs() {
        return songService.getAllPjesme();
    }

    // GET /api/admin/randomsong
    // Random pjesma
    @GetMapping("/randomsong")
    public Pjesma getRandomSong(@RequestParam Pjesma.Emocija mood) {
        return songService.getRandomSong(mood);
    }

    // POST /api/admin/songs
    // Šalji pjesme
    @PostMapping("/songs")
    public void createSong(@RequestBody PjesmaRequestDTO songRequest) {
        songService.createPjesma(songRequest);
    }

    // PUT /api/admin/songs/{id}
    // Uredi pjesmu
    @PutMapping("/songs/{id}")
    public void updateSong(@PathVariable int id, @RequestBody PjesmaRequestDTO songRequest) {
        songService.updatePjesma(id, songRequest);
    }

    // DELETE /api/admin/songs/{id}
    // Briši pjesmu
    @DeleteMapping("/songs/{id}")
    public void deleteSong(@PathVariable int id) {
        songService.deletePjesma(id);
    }

    // GET /api/admin/responses
    // Vrati sve odazive
    @GetMapping("/responses")
    public List<Odaziv> getResponses() {
        return responseService.getOdazivi();
    }

    // GET /api/admin/users
    // Vrati sve korisnike
    @GetMapping("/users")
    public List<Korisnik> getUsers() {
        return userService.getAllKorisnici();
    }

    // GET /api/admin/responses/export?surveyId=1
    // Vrati sve odazive
    @GetMapping("/responses/export")
    public ResponseEntity<List<Odaziv>> exportResponses() {
    	List<Odaziv> responses = responseService.getAllResponses();  
        return ResponseEntity.ok(responses);     }
}
