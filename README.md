# starta-granskning

## Beskrivning
Denna tjänst är till för att underlätta start av I- eller T-granskningstjänsten. 
Det åstadkoms främst genom att domännamn och domänversion väljs från listboxar istället för att skrivas in som url-parametrar till granskningstjänsterna.

### Implementationen i korthet
- Tjänsten är utvecklad i Python som använder Flask för att exponera två endpoints och svara på anrop. De endpoints som exponeras är:
- Denna tjänst är utvecklad i HTML, Javascript och (snart även) CSS
- Listboxen med domännamn populeras genom att Javascriptkod hämtar innehållet från rivta-domains på Bitbucket
- Listboxen med domänversioner populeras genom att Javascriptkod hämtar vald domäns befintliga taggar från domänens repo i Bitbucket
- Start av I- eller T-granskningstjänsten sker gfrån de respektive knappar som visas när både domän och version (tagg) är valda

### Hämtning av listor med domännamn respektive taggnamn
- Javascriptfunktionen initDomainNameList() hämtar domännamn och fyller comboboxlistan med dem
- Domännamnen hämtas från ett Bitbucket med hjälp av Bitbuckets API, version 2
  - URL till den Bitbucketsida som innehåller domännamnen: https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10&sort=name
- Domännamnen hämtas i JSON-format. Från JSON-objekten hämtas domännamn samt url till varje domäns Bitbucketsida där dess taggar finns angivna
  - Domännamn och url till domänens sida med taggar sparas i ett key/value-objekt
- När användare väljer en domän så anropas funktionen initDomainTagList()
  - Funktionen hämtar url till vald domäns sida med taggar från key/value-objektet
  - Därefter hämtas en lista i JSON-format med befintliga taggar, vilka sedan populeras i dess comboboxlista

### Inför överlämning till förvaltning
- Koden förenklas och renodlas inför slutleverans
- Det finns ett antal repos för RIVTA-verktyg på Bitbucket. På sikt bör även detta kodprojekt flyttas dit

### Runtime-stöd:
Filerna composer.json och index.php används av Heroku vid deploy för att stödja en html-baserad tjänst, 
vilket inte stöds direkt utan åstadkoms genom att konfigurera tjänsten som en php-tjänst, fast utan php-kod

### Python-filer som används i förbättrad struktur:
```
- index.html
  - Innehåller de html-element som används
  - Innehåller även lite Javascriptkod som exekveras då index.html anropas
  
- javascript / service_logic.js
  - Innehåller Javascriptfunktioner som hämtar domännamn och deras taggar samt visar dessa i listelementen i indox.html
    
- composer.json
    - Används av Heroku

- index.php
    - Används av Heroku för att peka ut index.html som den html-fil som ska visas vid anrop till tjänsten

```


## Driftsättning, konfiguration, beroenden:
- Push till GitHub-repo
  - Från lokalt repo
- Deploy till Heroku-app
  - Deploy sker med Herokus CLI (git push heroku master)

## Restlista vid överlämning till förvaltning
- Knapparna som används för att starta I- eller T-granskningstjänsten ska göras större
- UX-arbete behöver göras för att göra webbgränssnittet mer lättanvänt 
- Webbgränssnittet behöver även kompletteras med förklarande text som beskriver hur tjänsten ska användas 
