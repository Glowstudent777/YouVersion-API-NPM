const axios = require("axios");
const cheerio = require("cheerio");
const bookList = require("./books.json");

async function getVerseOfTheDay() {
    const url = "https://www.bible.com/verse-of-the-day";
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const wrapper = $(".verse-wrapper");

        const verses = [];

        await wrapper.each((i, p) => {
            const verse = { verse: "", passage: "" };

            let unformattedVerse = $(p).children('p').eq(0).text();
            verse.verse = unformattedVerse.replace(/\n/g, ' ');
            verse.passage = $(p).children('p').eq(1).text();

            verses.push(verse);
        })

        return verses[0];

    } catch (err) {
        console.error(err);
    }
}

// url: https://www.bible.com/bible/1/GEN.1.KJV
// url: https://www.bible.com/bible/1/PSA.119.2-3.NIV
// scheme: book.chapter.verse.version
// verse is optional
async function getVerse(book, chapter, verses, version = "NIV") {
    const baseURL = "https://www.bible.com";
    const lang = 1;

    if (!book || !chapter || !verses) return "Please provide all parameters";
    try {
        let result = {};
        for (var i = 0; i < bookList.books.length; i++) {
            if (bookList.books[i].book == book || bookList.books[i].aliases.includes(book)) {

                let URL = `${baseURL}/${lang}/${bookList.books[i].aliases[0]}.${chapter}.${verses}.${version}`
                try {
                    const { data } = await axios.get(URL);
                    const $ = cheerio.load(data);

                    const lastVerse = $(".label").eq(-1).text();
                    if (lastVerse) throw new Error("Verse not found");
                    if (chapter > bookList.books[i].chapters) throw new Error("Chapter not found.");

                    const versesArray = [];
                    const wrapper = $(".lh-copy");

                    await wrapper.each((i, p) => {
                        let unformattedVerse = $(p).eq(0).text();
                        let formattedVerse = unformattedVerse.replace(/\n/g, ' ');
                        versesArray.push(formattedVerse)
                    })
                    result.book = book;
                    result.alias = bookList.books[i].aliases[0];
                    result.chapter = chapter;
                    result.verses = verses;
                    result.version = version;
                    result.passage = versesArray[0];
                } catch (err) {
                    console.error(err);
                }
            }
        }

        if (!result.book) throw new Error("Could not get book information!")
        else return result;

    } catch (err) {
        return console.error(err);
    }
}

(async () => {
    const verses = await getVerse("Genesis", "1", "30", "NIV");
    console.log(verses);
})();

module.exports = { getVerseOfTheDay, getVerse }