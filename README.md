# YouVersion-API

A simple module to get the Verse of the Day and any verse you would like.

## Installation
Install via NPM:

```bash
npm install @glowstudent/youversion

```

## Usage

#### javascript

```javascript

const YouVersion = require("@glowstudent/youversion");

await YouVersion.getVerseOfTheDay();

await YouVersion.getVerse("Genesis", "1", "1", "KJV");

```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).