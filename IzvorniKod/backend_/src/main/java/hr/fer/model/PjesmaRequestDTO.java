package hr.fer.model;


public class PjesmaRequestDTO {
	private String naslov;
    private String autor;
    private String zanr;
    private String url;
    private String emocija;
    
	public String getNaslov() {
		return this.naslov;
	}
	
	public void setNaslov(String naslov) { 
        this.naslov = naslov;
    }

	public String getAutor() {
		return this.autor;
	}
	
	public void setAutor(String autor) { 
        this.autor = autor;
    }

	public String getUrl() {
		return this.url;
	}
	
	public void setUrl(String url) { 
        this.url = url;
    }
	
	public String getZanr() {
		return this.zanr;
	}
	
	public void setZanr(String zanr) { 
        this.zanr = zanr;
    }

	public String getEmocija() {
		return this.emocija;
	}
	
	public void setEmocija(String emocija) { 
        this.emocija = emocija;
    }

}
