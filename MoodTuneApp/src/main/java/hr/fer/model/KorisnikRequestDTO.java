package hr.fer.model;

public class KorisnikRequestDTO {
	
	private int dob;
	private Spol spol;    
	private StanjePrije stanjePrije;    
	private StanjeZeljeno stanjeZeljeno;    
    
	public enum Spol {muško,žensko,ostalo};    
    public enum StanjePrije {tuzan,sretan,motiviran,smiren,drugo};    
    public enum StanjeZeljeno {tuzan,sretan,motiviran,smiren}
    
	public int getDob() {
		return dob;
	}
	public void setDob(int dob) {
		this.dob = dob;
	}
	public Spol getSpol() {
		return spol;
	}
	public void setSpol(Spol spol) {
		this.spol = spol;
	}
	public StanjePrije getStanjePrije() {
		return stanjePrije;
	}
	public void setStanjePrije(StanjePrije stanjePrije) {
		this.stanjePrije = stanjePrije;
	}
	public StanjeZeljeno getStanjeZeljeno() {
		return stanjeZeljeno;
	}
	public void setStanjeZeljeno(StanjeZeljeno stanjeZeljeno) {
		this.stanjeZeljeno = stanjeZeljeno;
	};
    
    
}
