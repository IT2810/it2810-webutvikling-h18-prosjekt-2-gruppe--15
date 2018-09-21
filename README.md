## Arkitektur og implementasjon
Arkitekturelle taktikker 
Innkapsling og løs kobling: React er et rammeverk vi måtte lære oss mens vi jobbet med. Dette ville selvsagt føre til tidvis store endringer i komponentene. Å maksimere innkapsling og minimere avhengigheter (løs kobling) ble derfor kritisk for å unngå store ringvirkninger i koden. 

Sende tilstanden opp: Noen variabler, som lenker og hvilke medier som er tilgjengelige, er informasjon alle komponentene trenger, og bør derfor endres overalt om det endres en plass. Derfor ble tilstanden til appen i stor, men fortsatt minimal grad erklært i app.js. I all hovedsak er dette snakk om hvilke lenker som er i bruk, slik menyene kan endre og containere laste disse. 
## Menyer 
Applikasjonen brukes ved hjelp av en navbar og en skjult sidebar, hvor elementene på siden kan byttes ut ved å trykke på linkene i sidebaren. 

Callstack: Menyen for medieutvalg bruker komponenter valgt i app.js for å laste innhold. Dette er fordi callback-funksjonen må gjøres i app.js, ettersom tilstanden til appen ligger der (laveste felles forelder til innhold og meny). 

Menykomponenter: Per nå består menyen av ulike men nesten identiske klasser. Disse kunne vært gjort helt like ved hjelp av parametre, men vi ønsket separate klasser for å kunne designe de annerledes. Dette ble det dessverre ikke tid til, men i en hypotetisk sprint etter innlevering kunne vi eksempelvis flyttet lyd-spilleren inn i menyen, lagt til thumbnails og mer. 

Valgene i menyene, både labels i sidebar og navbar bestemmes av urls.json. Dette lar en fritt endre innhold, hvor endringene sømløst forplanter seg gjennom appen. 
## AJAX og lagring av innlastede objekter
Fetch API: For å utføre AJAX valgte vi å bruke fetch, da det er vanlig og defacto standard å bruke. På grunn av dette tenkte vi at fetch var synnsynlig til å ha best støtte på tvers av nettlesere. Videre er det også enkelt å bruke, slik en kan bruke det hvor-enn det passer. 

Lagring av innlastede objekter: For å beholde innlastede objekter bruke vi enkelt og greit en dictionary hvor den relative urlen til objektet var nøkkel, og objektet var verdi.

For å da å se om objektet har vært lastet inn eller ikke, kan en sjekke om lenken finnes i nøkkelsettet til dictionarien. 

Potensielt kunne en annen løsning også vært å bruke componentWillUmount og en callback-funksjon, og deretter lage/fjerne bildecontainere underveis. Men fordi AJAX og innlasting var allerede gjort inne i containeren, grunnet innkapsling, fant vi det mest hensiktsmessig å også la den håndtere lagring. 
## Oppsett av linker 
Urls.json: Hvilke medier har vi tilgjengelig, og hva er linkene deres? Dette er viktig uavhengig av hvilke script som kjører, og ble derfor tatt helt ut i sitt eget json-objekt. 

Urls.json er strukturert på følgende måte: 

```json
{kategori:
	{svgUrl: {
		Bildetittel: relativ_lenke_til_objekt.svg
		...
		}
	}
	{audioUrl: {
		Musikktittel: relativ_lenke_til_objekt.mp3
		…
		}
	}
	{poemUrl: {
		Dikttittel: relativ_lenke_til_objekt.json
		…
		}
	}
...
}
```
Dette gir flere fordeler: 
Vi kan ha så mange kategorier, og elementer (bilder, lydfiler, m.m.) som vi vil.
All kode er basert på lengde av og nøklene til objektene
Endrer vi medier, trenger vi kun å erklære ny url til mediet. 

Men det gir også en betydelig ulempe i at koden antar å finne svgUrl, audioUrl og poemUrl i json-objektet. Finnes ikke en av de, vil applikasjonen ikke fungere. Vi anså dette som en rimelig antagelse, da dette også sikrer at alle lenkene alltid er oppdatert i hele kodebasen (om ingen hardkoder lenker). 

## Layout
Med tanke på Layout ønsket vi at det skulle være relativt enkelt og rent. Hovedfokuset på siden skulle være kunsten og diktene. Vi hadde som mål å starte å designe først med mobil i tankene - Mobile first. Dette var for at overgangen fra mobil til desktop skulle være så smertefri som mulig. Vi ønsket også at layoutet skulle være gjenkjennelig og relativt likt på alle plattformer (kun tilpasset størrelse og rekkefølge på elementer slik at synligheten og interaktiviteten skulle være enkel uanhengig av skjermtørrelse)	

Innhold: Innholdet er delt inn i kategorier (ørken, regn og hav), hvorav hver kategori har 4 dikt, bilder og lyder. 

Meny: Menyen styres ved at et sidepanel som kan vises og skjules lar brukeren velge ulike bilder, dikt, og lyder i en gitt kategori. Kategorien velges i navbaren under headeren. 

Vi innser at dette er en kontraintuitiv løsning, men er som følge av at oppgaven ble opprinnelig løst under misforståelsen av at ved å endre kategori skulle hele galleriet endres. 

En bedre løsning som vi ville laget gitt mer tid, ville vært å flytte kategoriene inn i sidepanelet, slik det kommer tydeligere frem at disse kun switcher meny-valgene. Videre burde også valgt kategori hatt spesiell styling, for å vise hvilken kategori som er valgt. 
## Responsivt Web Design
Den responsive delen av layoutet ble håndtert i stor grad gjennom mediaqueries. Her definerte vi ‘breakpoints’ hvor designet skulle endre seg. Den største endringen var fra større til mindre skjermer hvor hovedelementene på siden (bilde og tekst) gikk fra å bli plassert på rad til å bli plassert i kolonner slik at hvert element fortsatt synes godt på mindre skjermer. 
## Testing
Testprosedyrer: Testing ble gjort fortløpende ved å bruke reacts innebygde development-server. En regel innad i gruppen var å aldri merge feilgivende kode til develop, slik develop alltid var funksjonell. Med andre ord - test før merge. I tillegg til dette skulle alt som skulle merges inn i develop gjennomgå en pull-request og da code review av minst ett annet medlem før det ble godkjent. 

Cross-browser testing: React-serveren kjøres på localhost, som gjør at enhver nettleser kan teste siden. Følgene nettlesere ble brukt: 
Google Chrome (desktop & mobil) 
Mozilla firefox 
## Endringer 
Det ble noen endringer med tanke på layout og utstillinger enn slik oppgaven beskrev ( eksempel layout på blackboard). Vi følte det ga mer mening om vi delte ‘tabs’ (oppe i nav baren) inn i kategorier istedenfor utstillinger. Dette gjør at vi har 3 ulike kategorier å velge elementer fra (regn, hav og ørken). Gjennom sidebaren kan en (etter valg av kategori) velge fra 4 valg av bilde, lyd og tekst. Med dette lager brukeren lager sine egne utstillinger i stedet for at de er bestemt på forhånd. 
