# **MoodTune - Aplikacija za praćenje emocionalnih promjena putem glazbe**

**MoodTune** je aplikacija koja omogućava korisnicima praćenje i analizu svojih emocionalnih stanja uz pomoć glazbe. Glavni cilj aplikacije je pomoći korisnicima da bolje razumiju kako glazba utječe na njihovo raspoloženje. Na početku slušanja, korisnik označava kako se osjeća i kako bi želio da se osjeća nakon slušanja pjesme. Nakon slušanja, korisnik na semantičkom diferencijalu označava koliko mu se raspoloženje približilo željenom stanju.

Pjesme koje se mogu slušati pohranjene su u bazi na **Dropboxu**, podijeljene u četiri kategorije: sretne, tužne, motivirajuće i smirujuće pjesme. Pjesma koja se reproducira korisniku nasumično se odabire iz one kategorije koja odgovara njegovom trenutnom emocionalnom stanju.

Aplikacija uključuje ulogu administratora koji se mora ulogirati kako bi imao pristup anonimnim rezultatima anketa korisnika. Ovi podaci mogu se koristiti u istraživačke svrhe kako bi se analiziralo utjecaj glazbe na emocionalna stanja.

**MoodTune** je vizualno atraktivna, jednostavna za korištenje i intuitivna aplikacija koja je prilagođena širokom krugu korisnika – od onih koji traže smirenje do onih koji žele motivaciju ili sreću.

---

## **Razlozi za razvoj MoodTune**

### 1. Praćenje emocionalnih promjena pomoću glazbe
MoodTune omogućava korisnicima da svjesno prate kako glazba utječe na njihovo raspoloženje. Na početku korisnik označava svoje trenutne emocije i postavlja željeni cilj za svoje raspoloženje nakon slušanja. Ovaj proces može biti koristan za osobnu introspekciju i terapeutske svrhe.

### 2. Personalizirano iskustvo
Kroz odabir različitih kategorija pjesama (sretne, tužne, motivirajuće, smirujuće), korisnici mogu prilagoditi aplikaciju svojim emocionalnim potrebama. Pjesme se odabiru nasumično unutar tih kategorija, čime se korisnicima pruža personalizirano iskustvo koje odgovara njihovim željama i trenutnom emocionalnom stanju.

### 3. Pružanje vrijednih podataka za istraživanja
Kroz administratorovu funkciju, aplikacija omogućava prikupljanje anonimnih podataka o emocionalnim reakcijama korisnika na glazbu. Ovi podaci mogu poslužiti u daljnjim istraživanjima utjecaja glazbe na emocionalna stanja i pomoći u boljem razumijevanju kako različite vrste glazbe mogu pozitivno ili negativno utjecati na raspoloženje.

### 4. Jednostavnost korištenja i pristup svim korisnicima
MoodTune je dizajniran tako da bude jednostavan za korištenje i vizualno atraktivan, omogućujući širokom krugu korisnika, bez obzira na tehničku vještinu, da lako koristi aplikaciju. Bilo da korisnici traže smirenje, motivaciju ili sreću, aplikacija im omogućava prilagodbu prema njihovim potrebama.

### 5. Poticanje emocionalne svijesti i samopomoći
Aplikacija pomaže korisnicima u razvoju emocionalne svijesti i samopomoći. Praćenje emocionalnih promjena kroz glazbu može pomoći korisnicima da prepoznaju obrasce u svom raspoloženju i ponašanju, a glazba može poslužiti kao alat za poboljšanje emocionalne ravnoteže i samopomoći.

### 6. Potencijal za proširenje i daljnje prilagodbe
MoodTune je dizajniran s fleksibilnošću, omogućujući proširenje i dodavanje novih funkcionalnosti. Aplikacija se može proširiti dodavanjem novih pjesama, kategorija raspoloženja ili anketa, što omogućava daljnje istraživanje i inovacije.

---

## **Mogućnosti prilagodbe aplikacije**

### 1. Višenamjensko anketiranje
Baza podataka može se proširiti za višenamjensko anketiranje. Iako se trenutno koristi za praćenje učinka glazbe na raspoloženje, aplikacija može podržati različite vrste anketa, uključujući one koje se odnose na različite teme i emocionalna stanja korisnika. Time se omogućuje šira primjena aplikacije u istraživanjima.

### 2. Upravljanje pjesmama, emocijama i anketama
Kroz **MVC Spring Boot** servise, administrator može unositi, uređivati i brisati pjesme, emocije, pitanja i odgovore u sustav. To omogućava laku i učinkovitu administraciju sadržaja aplikacije, uključujući dodavanje novih pjesama, kategorija emocija te ažuriranje anketa prema potrebama korisnika ili istraživačkih ciljeva.

### 3. Modularni frontend
Frontend aplikacije je modularan i može se proširivati s novim komponentama. To omogućava brzu prilagodbu aplikacije novim funkcionalnostima, kao što su dodatne ankete, nove kategorije raspoloženja ili proširenja vezana uz interakciju korisnika, bez potrebe za velikim promjenama u postojećem kodu.

---

## **Skup korisnika zainteresiranih za rješenje**

- **Korisnici** koji žele poboljšati svoje emocionalno stanje putem glazbe, pratiti promjene raspoloženja i koristiti glazbu kao alat za smanjenje stresa, poboljšanje raspoloženja, povećanje motivacije ili postizanje smirenosti.
  
- **Stručnjaci u području mentalnog zdravlja** koji žele koristiti aplikaciju kao alat za praćenje i analizu emocionalnog stanja svojih klijenata, čime aplikacija može poslužiti kao pomoć u terapiji i procesu samopomoći.
  
- **Istraživači** u područjima psihologije, neuroznanosti i glazbene terapije koji žele koristiti aplikaciju za analizu utjecaja glazbe na emocionalna stanja i dobrobit korisnika.


## **Razvojni tim**
Antonio Poleto – backend, baze podataka, testiranje
Dorotea Požega – frontend, UI/UX, deployment
Ema Bradić – frontend, UI/UX, dokumentacija
Patrick Mraz – backend, baze podataka, deployment, dokumentacija, voditelj grupe
Petra Predrijevac – frontend, UI/UX, dokumentacija
