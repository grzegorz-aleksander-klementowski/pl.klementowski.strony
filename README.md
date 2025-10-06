# Strony dla Biznesu – Portfolio Grzegorza Aleksandra klementowskiego

![Build Status](https://img.shields.io/badge/ci-pending-lightgrey?label=CI)

Nowoczesne portfolio webdevelopera z Dolnego Śląska, zaprojektowane, aby natychmiast pokazać strategię, projektowanie i kodowanie w jednym doświadczeniu. Hero z sekwencją plan–kod–start, sekcje ofertowe oraz siatka realizacji gotowa na prawdziwe zrzuty ekranów.

## Podgląd
- Futurystyczne intro z animacjami pokazującymi cały proces budowy strony
- Sekcja „Co dostajesz” z konkretami dla lokalnych firm i klientów z całej Polski
- Portfolio 8 projektów — każdy kafelek prowadzi do szczegółów na nowej karcie
- Mikrointerakcje i smooth scroll, dostosowane do preferencji ruchu użytkownika

## Struktura
```
.
├── index.html      # Struktura strony i sekcje
├── styles.css      # Motyw, animacje, responsywność (Poppins, Playfair, Manrope, Lato)
├── script.js       # Intersection Observer + sekwencja hero
└── assets/         # Placeholdery grafik i zdjęcia produktu
```

## Uruchomienie lokalne
Wystarczy otworzyć `index.html` w przeglądarce statycznej (np. `file://` lub serwer typu `npx serve`).

```bash
npx serve .
```

## Kontrola jakości
Rekomendowana konfiguracja CI (GitHub Actions) sprawdza HTML, CSS i formatowanie poprzez `htmlhint`, `stylelint` oraz `prettier`.

```
npx htmlhint "**/*.html"
npx stylelint "**/*.css"
npx prettier --check "**/*.{html,css,js,json}"
```

> ❗ Przygotowane joby wymagają Node 20+ oraz dostępu do rejestru npm.

## Autor
Grzegorz Aleksander klementowski — projektowanie serwisów, automatyzacja danych i opieka techniczna dla firm z Dolnego Śląska i całej Polski.

Kontakt: [storny@klementowski.pl](mailto:storny@klementowski.pl)
