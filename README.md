# starta-granskning

## Beskrivning
Denna tjänst är till för att underlätta start av I- eller T-granskningstjänsten. 
Det åstadkoms främst genom att domännamn och domänversion väljs från listboxar istället för att skrivas in som url-parametrar till granskningstjänsterna.

## Teknisk information om tjänsten
- Denna tjänst är utvecklad i HTML, Javascript och CSS
- Listboxen med domännamn populeras genom att Javascriptkod hämtar innehållet från rivta-domains på Bitbucket
- Listboxen med domänversioner populeras genom att Javascriptkod hämtar vald domäns befintliga taggar från domänens repo i Bitbucket