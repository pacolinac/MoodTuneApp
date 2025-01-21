package hr.fer.model;

public class PjesmaRequestDTO {
	private String naslov;
	private String autor;
	private String zanr;
	private String url;
	private Pjesma.Emocija emocija;

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

	public String getZanr() {
		return this.zanr;
	}

	public void setZanr(String zanr) {
		this.zanr = zanr;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Pjesma.Emocija getEmocija() {
		return this.emocija;
	}

	public void setEmocija(Pjesma.Emocija emocija) {
		this.emocija = emocija;
	}

	@Override
	public String toString() {
		return "PjesmaRequestDTO{" +
				"naslov='" + naslov + '\'' +
				", autor='" + autor + '\'' +
				", zanr='" + zanr + '\'' +
				", url='" + url + '\'' +
				", emocija=" + (emocija != null ? emocija.toString() : "null") +
				'}';
	}
}
