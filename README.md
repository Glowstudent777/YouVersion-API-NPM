# YouVersion-API

A simple module to get the Verse of the Day and any verse you would like.

## Installation
Install via NPM:

```bash
npm install @glowstudent/youversion

```

## Usage

#### Import the library
```javascript
const YouVersion = require("@glowstudent/youversion");
```

#### Getting the verse of the day: 
```javascript
// Version is not yet configurable
console.log(await YouVersion.getVerseOfTheDay());
```
```json
{
  "verse": "Now faith is confidence in what we hope for and assurance about what we do not see.",
  "passage": "Hebrews 11:1 (NIV)"
}
```

#### Getting any verse: 
```javascript
// Version is optional, default version is NLT
// YouVersion.getVerse("Book", "Chapter", "Verses", "Version");

console.log(await YouVersion.getVerse("John", "3", "16", "KJV"));
```
```json
{
  "book": "John",
  "alias": "JHN",
  "chapter": "3",
  "verses": "16",
  "version": "KJV",
  "passage": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
}
```

## Examples

Getting any verse: 
```javascript

const YouVersion = require("@glowstudent/youversion");

// Get Genesis 1:1-3 NLT
console.log(await YouVersion.getVerse("Genesis", "1", "1-3").passage);

// Get John 3:16 KJV
console.log(await YouVersion.getVerse("John", "3", "16", "KJV").passage);

```

Getting the Verse of the Day: 
```javascript

// Now faith is the substance of things hoped for, the evidence of things not seen.
console.log(await YouVersion.getVerseOfTheDay().verse);

// Hebrews 11:1 (KJV)
console.log(await YouVersion.getVerseOfTheDay().passage);

```

## Links
- [GitHub](https://github.com/Glowstudent777/YouVersion-API)
- [npm](https://www.npmjs.com/package/@glowstudent/youversion)
- [Discord](https://discord.gg/4wM63P7ZUd)

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
