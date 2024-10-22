MoodTunes je aplikacija koja koristi snagu glazbe kako bi podržala mentalno zdravlje, prilagodila se vašem trenutnom stanju uma i poboljšala vaše raspoloženje.

MoodTunes analizira četiri ključna emocionalna stanja – smirenost, sreća, motivacija i tuga – i nudi personalizirane glazbene preporuke iz naše bogate kolekcije od preko 80 pažljivo odabranih pjesama. Korisnici biraju kategoriju emocija, odaberu nekoliko pjesama koje slušaju, a aplikacija prati promjene u raspoloženju kroz kratke upitnike prije i poslije slušanja glazbe.

Naša aplikacija koristi snagu glazbene terapije kako bi pozitivno utjecala na vaše emocionalno stanje, omogućavajući vam da se osjećate bolje u bilo kojem trenutku. Svaki korisnik može birati glazbu koja najbolje odgovara njegovom trenutnom raspoloženju i potrebi, dok aplikacija prati kako se njegovo raspoloženje mijenja tijekom korištenja.

MoodTunes je vizualno atraktivna, jednostavna za korištenje, i prilagođena svim korisnicima – od onih koji žele smirenje do onih koji traže motivaciju ili sreću. Aplikacija koristi psihološke metode poput semantičkog diferencijala za praćenje promjena u raspoloženju.

**Funkcijski zahtjevi**
Funkcionalni zahtjevi
1. Početni ekran (Home Screen)
•	Na početnom ekranu prikazuju se četiri glavne kategorije emocija (Calmness, Happiness, Motivation, Sadness). Na stranici je napisana motivacija aplikacije kao i sažetak istraživanja korelacije boja i emocija.
•	Korisnik jednostavno odabere kategoriju emocionalnog stanja na temelju kako se želi osjećati.
•	Stranica sadrži dugme za poveznicu na informacije korisničkog računa kao i pregled rezultata prijašnjih osobnih i cjelokupnih tuđih anketa.
•	Prije početka potrebno je prijaviti se ili stvoriti račun te ispuniti osobne informacije računa. Osobne informacije služe u svrhu stvaranja statističke slike baze korisnika. Sigurno pohranjivanje korisničkih podataka i odgovora na upitnike, u skladu s GDPR-om.

2. Odabir pjesama
•	Nakon odabira kategorije, prikazuju se dostupne pjesme (20 pjesama po kategoriji). Korisnik odabire tri pjesme koje želi poslušati.
•	Vizualni elementi poput albuma, efekata zvuka, animacije koja prati izbor pjesama, doprinose atraktivnosti aplikacije. 

3. Upitnik prije slušanja pjesama
•	Prije slušanja pjesama, korisnik ispunjava upitnik koji bilježi trenutno raspoloženje. Ovdje se koriste parovi atributa (npr. sretan—tužan, miran—nemiran) postavljeni na skali od 1 do 7.
•	Upitnik može biti prezentiran kroz intuitivne slider-e ili dugmad kako bi korisnik jednostavno ocijenio svoje trenutno stanje.
•	Korisnik ujedno može reprezentirati svoje raspoloženje izbornikom boje.

4. Slušanje pjesama
•	Pjesme se reproduciraju uz opciju pauziranja ili preskakanja. Korisnik može kontrolirati koliko puta želi preslušati pjesme, no aplikacija ih automatski vodi kroz proces.
•	Dok pjesme sviraju, vizualni efekti u pozadini mogu se mijenjati, npr. svjetlosni tonovi, animacije koje prate raspoloženje ili motiv pjesme.

5. Upitnik nakon slušanja pjesama
•	Po završetku slušanja, korisnik ispunjava isti upitnik kako bi se utvrdila promjena raspoloženja.
•	Nakon što korisnik ispuni drugi upitnik, aplikacija mu može vizualno prikazati usporedbu (npr. grafikon ili promjena boja) kako bi mogao vidjeti kako su pjesme utjecale na njegovo raspoloženje.

6. Rezultati i praćenje promjena
•	Aplikacija bi mogla prikazivati povijest raspoloženja korisnika kroz vremenski okvir, omogućujući mu da prati kako različite pjesme i emocije utječu na njegovo opće raspoloženje.
•	Korisnik dobiva statistički pregled svojih odgovora i može dobiti preporuke za pjesme u budućnosti, temeljene na analizi njegovih preferencija i reakcija.

7. Društveni aspekt
•	Korisnici mogu podijeliti svoje rezultate ili pjesme koje im pomažu s prijateljima ili na društvenim mrežama.
•	Rezultati su prikazani u obliku različitih grafikona koji imaju mogućnost filtriranja po pojedinim atributima pjesama i korisnika.

8. Administracija i istraživački podaci
•	Ako se aplikacija koristi u istraživačke svrhe, administratori mogu prikupljati podatke o promjeni raspoloženja (anonimno), što može poslužiti za daljnju analizu o utjecaju glazbe na emocionalna stanja.

Nefunkcionalni zahtjevi
1. Performanse: 
•	Brzi odziv aplikacije s maksimalnim vremenom učitavanja pjesama do 5 sekundi.

2. Sigurnost: 
•	Sigurna autentifikacija, šifriranje podataka i GDPR usklađenost.

3. Skalabilnost: 
•	Podrška za povećanje broja korisnika i dinamičku bazu podataka.

4. UI/U: 
•	Intuitivno, atraktivno i responzivno korisničko sučelje prilagođeno svim uređajima.

5. Održavanje: 
•	Brza automatska ažuriranja baze podataka.
6. Klijent-poslužitelj:
•	Aplikacija je izvedena u arhitekturi klijent-poslužitelj. Omogućava jasnu podjelu između klijentske strane i poslužiteljske strane.

**Tehnologija**
Za  komunikaciju unutar našeg tima koristimo Discord i WhatsApp, koji nam omogućava brzu razmjenu ideja i suradnju u realnom vremenu. 
Odabrali smo React za frontend, koji omogućava izradu interaktivnih i dinamičnih korisničkih sučelja.
Za backend odabrali smo Javu i Spring Framework.

**Članovi tima**
Petra Predrijevac 
Ema Bradić 
Antonio Poleto 
Dorotea Požega
Patrick Mraz
