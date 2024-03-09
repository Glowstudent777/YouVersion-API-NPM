# YouVersion-API

A simple module to get the Verse of the Day and any verse you would like.

## Installation

> **Note**
> I use `pnpm` in these examples. `NPM` will also work if you don't have or want to install `pnpm`

First step is of course installing the module

```bash
pnpm install @glowstudent/youversion
```

## Usage

#### Import the library

```javascript
const YouVersion = require("@glowstudent/youversion");
```

#### Getting the verse of the day:

> **Note**
> Version is not yet configurable

```javascript
const YouVersion = require("@glowstudent/youversion");

(async () => {
  console.log(await YouVersion.getVerseOfTheDay());
})();
```

```json
{
  "citation": "Hebrews 11:1 (NIV)",
  "passage": "Now faith is confidence in what we hope for and assurance about what we do not see."
}
```

#### Getting any verse:

```javascript
const YouVersion = require("@glowstudent/youversion");

(async () => {
  console.log(await YouVersion.getVerse("John", "3", "16", "KJV"));
})();
```

```json
{
  "citation": "John 3:16 KJV",
  "passage": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
}
```

---

## Responses

Requests return a JSON object and a status code.

### Good Respsonses

Good responses will return a JSON with a `citation` and a `passage`.

```json
{
  "citation": "John 3:16 NLT",
  "passage": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
}
```

### Bad Responses

If `book` is not specified or cannot be read it will return an error.

```json
{
  "code": 400,
  "message": "Missing field 'book'"
}
```

<br>

Trying to access a book that does not exist will prompt a similar response but with a different error message

```json
{
  "code": 400,
  "message": "Could not find book 'Coffee' by name or alias."
}
```

# Books and Aliases

<details>
<summary>Books and Aliases</summary>

| Book              | Alias |
| ----------------- | ----- |
| Genesis           | GEN   |
| Exodus            | EXO   |
| Leviticus         | LEV   |
| Numbers           | NUM   |
| Deuteronomy       | DEU   |
| Joshua            | JOS   |
| Judges            | JDG   |
| Ruth              | RUT   |
| 1st Samuel        | 1SA   |
| 2nd Samuel        | 2SA   |
| 1st Kings         | 1KI   |
| 2nd Kings         | 2KI   |
| 1st Chronicles    | 1CH   |
| 2nd Chronicles    | 2CH   |
| Ezra              | EZR   |
| Nehemiah          | NEH   |
| Esther            | EST   |
| Job               | JOB   |
| Psalms            | PSA   |
| Proverbs          | PRO   |
| Ecclesiastes      | ECC   |
| Song of Songs     | SNG   |
| Isaiah            | ISA   |
| Jeremiah          | JER   |
| Lamentations      | LAM   |
| Ezekiel           | EZK   |
| Daniel            | DAN   |
| Hosea             | HOS   |
| Joel              | JOL   |
| Amos              | AMO   |
| Obadiah           | OBA   |
| Jonah             | JON   |
| Micah             | MIC   |
| Nahum             | NAM   |
| Habakkuk          | HAB   |
| Zephaniah         | ZEP   |
| Haggai            | HAG   |
| Zechariah         | ZEC   |
| Malachi           | MAL   |
| Matthew           | MAT   |
| Mark              | MRK   |
| Luke              | LUK   |
| John              | JHN   |
| Acts              | ACT   |
| Romans            | ROM   |
| 1st Corinthians   | 1CO   |
| 2nd Corinthians   | 2CO   |
| Galatians         | GAL   |
| Ephesians         | EPH   |
| Philippians       | PHP   |
| Colossians        | COL   |
| 1st Thessalonians | 1TH   |
| 2nd Thessalonians | 2TH   |
| 1st Timothy       | 1TI   |
| 2nd Timothy       | 2TI   |
| Titus             | TIT   |
| Philemon          | PHM   |
| Hebrews           | HEB   |
| James             | JAS   |
| 1st Peter         | 1PE   |
| 2nd Peter         | 2PE   |
| 1st John          | 1JN   |
| 2nd John          | 2JN   |
| 3rd John          | 3JN   |
| Jude              | JUD   |
| Revelation        | REV   |

</details>

# Versions

<details>
<summary>Versions</summary>
| Versions | ID   |
| -------- | ---- |
| AMP      | 1588 |
| AMPC     | 8    |
| ASV      | 12   |
| CCB      | 36   |
| ERV      | 406  |
| ESV      | 59   |
| GNV      | 2163 |
| ICL00D   | 1196 |
| KJV      | 1    |
| MSG      | 97   |
| NIV      | 111  |
| NLT      | 116  |
| NODTHNT  | 1907 |
| NR06     | 122  |
| NTV      | 2744 |
| SBLG     | 156  |
| SCH2000  | 157  |
| THAERV   | 203  |
| THSV11   | 174  |
| TNCV     | 179  |
| VULG     | 823  |
</details>


## Links

- [GitHub](https://github.com/Glowstudent777/YouVersion-API)
- [npm](https://www.npmjs.com/package/@glowstudent/youversion)
- [Discord](https://discord.gg/4wM63P7ZUd)

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
