# Rootscript

![CI](https://github.com/Kaienka/rootscript/actions/workflows/ci.yml/badge.svg)

**Learn to read your ancestors' handwriting.**

Rootscript is an interactive web app that teaches you to read **Kurrent**, the old German handwriting used in Prussian civil and church records, from single letters all the way to a complete birth, marriage or death record.

> **Status:** early development. Nothing to try yet; follow the repo to see it grow.

## Why

Millions of people have ancestors whose records were written in Kurrent, in Prussia, Silesia, Pomerania, Warmia, Masuria and beyond. Today even most native German speakers can't read it. Existing help is mostly static alphabet charts and PDF guides. This project aims to be a guided, hands-on course instead.

## Planned learning path

1. **Alphabet:** every letter with an animated stroke order, plus drills for the pairs that are easy to confuse (`e` / `n`, the arc over `u`, long `ſ` vs short `s`).
2. **Words:** the ~150 words that matter most in vital records (_geboren_, _getauft_, _Hebamme_, months, numbers), with typing exercises and graded hints.
3. **Real handwriting:** zoomable fragments of archival scans with hints pinned to the tricky spots.
4. **Whole records:** read a full civil registry record and fill in a form (date, child, parents, witnesses), then compare your reading with the reference transcription.

Your progress is saved in your browser and a spaced-repetition system brings back the letters you keep mixing up.

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API) + [Vite](https://vite.dev/)
- Vue Router, Pinia
- Vitest (unit tests), Playwright (end-to-end tests)
- Later: a small Node.js API for syncing progress between devices

## Getting started

> The app scaffold is coming in the next step. These commands will work once it lands.

```bash
git clone https://github.com/Kaienka/rootscript.git
cd rootscript
npm install
npm run dev
```

## Project structure

| Folder               | What goes there                                                              |
| -------------------- | ---------------------------------------------------------------------------- |
| `src/modules/`       | Features of the app, one folder each: `alphabet`, `words`, `scans`, `record` |
| `src/components/ui/` | Generic UI building blocks that know nothing about Kurrent                   |
| `src/composables/`   | Reusable Vue logic (`useProgress`, `useExercise`)                            |
| `src/lib/`           | Plain TypeScript functions with no Vue dependency, easy to unit test         |
| `src/content/`       | Course data as JSON: letters, words, scan transcriptions                     |
| `src/stores/`        | Pinia stores                                                                 |
| `src/views/`         | General pages such as Home and About                                         |
| `public/scans/`      | Processed scan images (added later)                                          |
| `e2e/`               | Playwright end-to-end tests                                                  |

Unit tests live in `__tests__` folders next to the code they test.

## Contributing

Ideas, corrections and reports of mistakes in the course content are very welcome. Please open an issue.

## Licence

- **Code** is released under the [MIT Licence](LICENSE).
- **Original course content** (lesson texts, exercises, word lists, letter drawings and transcriptions) is released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). See [LICENSE-CONTENT.md](LICENSE-CONTENT.md).
- **Archival scans and third-party fonts** keep their own licences, which are listed next to each item.
