package hr.fer.model;

public class UpraviteljLoginRequestDTO {
	  private String korisnickoIme;
	  private String lozinka;
	  
	  public String getKorisnickoIme() {
		  return this.korisnickoIme;
	  }
	  
	  public void setKorisnickoIme(String korisnickoIme) { 
	        this.korisnickoIme = korisnickoIme;
	    }
	  
	  public Object getLozinka() {
		  return this.lozinka;
	  }
	  
	  public void setLozinka(String lozinka) { 
	        this.lozinka = lozinka;
	    }
}
