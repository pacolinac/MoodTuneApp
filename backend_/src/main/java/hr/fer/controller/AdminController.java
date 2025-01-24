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
    private PitanjeServis questionService;
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

    // GET /api/admin/questions
    // Vrati sva pitanja
    @GetMapping("/questions")
    public List<Pitanje> getQuestions() {
        return questionService.getAllPitanja();
    }

    // POST /api/admin/questions
    // Šalji pitanja
    @PostMapping("/questions")
    public void createQuestion(@RequestBody PitanjeRequestDTO questionRequest) {
    	System.out.println(questionRequest.getTekst());
        questionService.createPitanje(questionRequest);
    }

    // PUT /api/admin/questions/{id}
    // Uredi pitanje
    @PutMapping("/questions/{id}")
    public void updateQuestion(@PathVariable int id, @RequestBody PitanjeRequestDTO questionRequest) {
        questionService.updatePitanje(id, questionRequest);
    }

    // DELETE /api/admin/questions/{id}
    // Briši pitanje
    @DeleteMapping("/questions/{id}")
    public void deleteQuestion(@PathVariable int id) {
        questionService.deletePitanje(id);
    }

    // GET /api/admin/songs
    // Vrati sve pjesme
    @GetMapping("/songs")
    public List<Pjesma> getAllSongs() {
        return songService.getAllPjesme();
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
