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
> The default language is English

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

#### Getting the verse of the day in a different language:

You can specify a single or multiple languages by passing them as a string separated by a comma. The languages must be in the format of the ISO 639-1 code. For example, `en` for English, `es` for Spanish, `fr` for French, and `de` for German. It will return the first language that is available. If the language is not available it will move on to the next language in the list.

Single language:

```javascript
const YouVersion = require("@glowstudent/youversion");

(async () => {
  console.log(await YouVersion.getVerseOfTheDay("sk"));
})();
```

Multiple languages:

```javascript
const YouVersion = require("@glowstudent/youversion");

(async () => {
  console.log(await YouVersion.getVerseOfTheDay("es, fr, de"));
})();
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

## Links

- [GitHub](https://github.com/Glowstudent777/YouVersion-API)
- [npm](https://www.npmjs.com/package/@glowstudent/youversion)
- [Discord](https://discord.gg/4wM63P7ZUd)

## Contributing

> **Note**
> Most of the logic is in the `YouVersion-Core` repository. If you would like to contribute to the core repository, please visit [here](https://github.com/Glowstudent777/YouVersion-Core).

Before creating an issue, please ensure that it hasn't already been reported/suggested.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
