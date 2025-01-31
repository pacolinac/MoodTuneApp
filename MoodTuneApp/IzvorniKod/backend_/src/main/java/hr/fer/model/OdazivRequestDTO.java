package hr.fer.model;

public class OdazivRequestDTO {
    private Integer korisnikId;
    private Integer pitanjeId;
    private Integer odgovorId;
    private Integer pjesmaId;
    private String boja;
    private Boolean preListening;

    public Integer getKorisnikId() {
        return korisnikId;
    }

    @Override
    public String toString() {
        return "OdazivRequestDTO{" +
                "korisnikId=" + korisnikId +
                ", pitanjeId=" + pitanjeId +
                ", odgovorId=" + odgovorId +
                ", pjesmaId=" + pjesmaId +
                '}';
    }

    public void setKorisnikId(Integer korisnikId) {
        this.korisnikId = korisnikId;
    }

    public Integer getPitanjeId() {
        return pitanjeId;
    }

    public void setPitanjeId(Integer pitanjeId) {
        this.pitanjeId = pitanjeId;
    }

    public Integer getOdgovorId() {
        return odgovorId;
    }

    public void setOdgovorId(Integer odgovorId) {
        this.odgovorId = odgovorId;
    }

    public Integer getPjesmaId() {
        return pjesmaId;
    }

    public void setPjesmaId(Integer pjesmaId) {
        this.pjesmaId = pjesmaId;
    }

    public String getBoja() {
        return boja;
    }

    public void setBoja(String boja) {
        this.boja = boja;
    }

    public Boolean getPreListening() {
        return preListening;
    }

    public void setPreListening(Boolean preListening) {
        this.preListening = preListening;
    }
}
