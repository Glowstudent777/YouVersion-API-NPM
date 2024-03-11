# BibleAPI

An API which scrapes bible websites to get daily verse, and verses.

## Installation

> **Note**
> I use `bun` in these examples. `npm` will also work if you don't have or want to install `bun`

First step is of course installing the module

```bash
bun install @cvyx/bible
```

## Usage

#### Import the library

```js
import { getVerse } from 'placeholder';
```

#### Getting the verse of the day:


```javascript
import { getVerse } from 'placeholder';;

  console.log(await YouVersion.getVerseOfTheDay());
```

```json
{
  "citation": "Hebrews 11:1 (NIV)",
  "passage": "Now faith is confidence in what we hope for and assurance about what we do not see."
}
```

#### Getting any verse:

```javascript
import { getVerse } from 'placeholder';

console.log(await getVerse('John', '3:16', 'NKJV'))
```
```json
{
  "citation": "John 3:16 NKJV",
  "passage": "For God so loved the world, that he gave his only begotten Son, that whosoever believes in him should not perish, but have everlasting life."
}
```

or alternatively..

```js
import { getVerse } from 'placeholder';

// Now you can use the getVerse function in your code
getVerse('Psalms', '22:9-10', 'NIV').then(result => console.log(result));
```

```json
{
  "citation": "Psalms 22:9-10 NIV",
  "passage": "Yet you brought me out of the womb; you made me trust in you, even at my mother’s breast. From birth I was cast on you; from my mother’s womb you have been my God.",
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

Trying to access a passage that does not exist will prompt an error message

```json
{
  "code": 400,
  "message": "Could not find passage Script 9:99 NLT",
}

```


# Versions

Checkout https://www.biblegateway.com/versions/

## Links

- [GitHub](https://github.com/cvyx/YouVersionAPI)
- [npm](https://www.npmjs.com/package/@glowstudent/youversion)
- [Discord](https://discord.gg/4wM63P7ZUd)

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
