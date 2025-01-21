package hr.fer.model;

public class OdazivRequestDTO {
    private Integer korisnikId;
    private String pitanjeText;
    private Integer odgovor;
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
                ", pitanjeText='" + pitanjeText + '\'' +
                ", odgovor=" + odgovor +
                ", pjesmaId=" + pjesmaId +
                ", boja='" + boja + '\'' +
                ", preListening=" + preListening +
                '}';
    }

    public void setKorisnikId(Integer korisnikId) {
        this.korisnikId = korisnikId;
    }

    public String getPitanjeText() {
        return pitanjeText;
    }

    public void setPitanjeText(String pitanjeText) {
        this.pitanjeText = pitanjeText;
    }

    public Integer getOdgovor() {
        return odgovor;
    }

    public void setOdgovor(Integer odgovor) {
        this.odgovor = odgovor;
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
