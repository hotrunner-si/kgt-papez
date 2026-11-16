# KGT Papež

Prva različica prenovljene spletne strani Kluba gorskih tekačev Papež v Nuxtu 4.

## Lokalni zagon

Z Node.js 22 ali novejšim in npm:

```sh
npm install
npm run dev
```

Za statični izvoz zaženi `npm run generate`. Datoteke za gostovanje so v `.output/public`.

## Pregled obstoječe strani in predlog prenove

| Področje | Kaj je vidno na obstoječi strani | Predlog |
| --- | --- | --- |
| Naslovnica | Obiskovalec najprej vidi tok novic. Pomembne povezave so razpršene po navigaciji in spremljevalnih blokih. | Najprej predstavitev kluba, koledar, rezultati in včlanitev. Novice naj bodo kratek pregled s povezavo do arhiva. |
| Navigacija | Glavni meni ima več ravni. Prireditve in izdaje iz različnih let so pomešane z aktualnimi povezavami. | Glavne rubrike Prireditve, Treningi, Novice, O klubu in Kontakt. Pretekle izvedbe naj bodo v arhivu po prireditvi in letu. |
| Koledar | Stran za leto 2026 je na naslovu s končnico 2025. Tudi pri teku na Bibo planino je navedeno leto 2025. | Uskladiti datum z organizatorjem. Dogodke hraniti kot strukturirane zapise in prikazati sezono, datum, kraj, status ter povezave za prijavo. |
| Rezultati | Rezultati so deloma objavljeni v PDF-jih, povezave pa se pojavljajo na več mestih. | Enotna stran za vsako izvedbo z razpisom, progo, rezultati in galerijo. Ključne podatke in rezultate prikazati tudi v dostopnem HTML-ju. |
| Vadba in vpis | Razdelek Treningi vsebuje urnik 2022/23. Informacije za vpis so v podmeniju kluba. | Objaviti urnik za tekoče šolsko leto in jasno navesti lokacijo, skupine, kontakt, članarino ter obrazec. |
| Dostopnost in mobilni prikaz | Na pregledanih straneh se ponavljajo generične povezave »Preberite več« in nekateri opisi slik so imena datotek. | Opisne povezave, smiselni alternativni opisi, vidni fokusi, logično zaporedje naslovov, dovolj veliki zadetki za dotik in preizkus s tipkovnico ter bralnikom zaslona. |
| Urejanje in selitev | Novice so razporejene po obsežnem arhivu. | Pred selitvijo popisati URL-je in dokumente. Nastaviti preusmeritve in uredniški sistem za dogodke, novice ter vadbo. Galerije optimizirati in urediti po dogodkih. |

Pregled temelji na [naslovnici in navigaciji](https://kgtpapez.si/index.php/sl/), [koledarju 2026](https://kgtpapez.si/index.php/sl/koledar-tekov-2025), [strani Treningi](https://kgtpapez.si/index.php/sl/kgt-papez/treningi), [kontaktu](https://kgtpapez.si/index.php/sl/kontakt) in [rezultatih za Sv. Primož in Veliko planino](https://kgtpapez.si/images/REZULTATIVSIPrimozVelikaplanina.pdf).

## Obseg prve različice

Slovenska naslovnica z mobilnim menijem, izbranimi objavami, povezavami do uradnega koledarja in izbranih rezultatov, predstavitvijo treningov ter kontaktnimi povezavami za včlanitev. Vsebina v `app/app.vue` je posnetek ob pregledu 16. novembra 2026. Pred objavo je treba potrditi termine in zamenjati oziroma odobriti začasni znak ter fotografije iz lokalnega projekta run-cup. Celoten arhiv in uredniški sistem sta predloga za naslednjo fazo.
