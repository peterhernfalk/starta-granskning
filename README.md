# starta-granskning

## Beskrivning
Denna tjänst är till för att underlätta start av I- eller T-granskningstjänsten. 
Det åstadkoms främst genom att domännamn och domänversion väljs från listboxar istället för att skrivas in som url-parametrar till granskningstjänsterna.

## Teknisk information om tjänsten
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