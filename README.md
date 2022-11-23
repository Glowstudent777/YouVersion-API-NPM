# YouVersion-API

A simple module to get the Verse of the Day and any verse you would like.

## Installation
Install via NPM:

```bash
npm install @glowstudent/youversion

```

## Usage

#### JavaScript

```javascript

const YouVersion = require("@glowstudent/youversion");

// Verse of the day
await YouVersion.getVerseOfTheDay();

// Fetching verses
await YouVersion.getVerse("Genesis", "1", "1", "KJV");
```

#### Examples
```javascript

const YouVersion = require("@glowstudent/youversion");

// getVerse("Book", "Chapter", "Verses", "Version");
// Version is optional, default version is NLT

// Get Genesis 1:1-3 NLT
console.log(await YouVersion.getVerse("Genesis", "1", "1-3"));

// Get John 3:16 KJV
console.log(await YouVersion.getVerse("John", "3", "16", "KJV"));

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
