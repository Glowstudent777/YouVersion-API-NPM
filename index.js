const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.bible.com/verse-of-the-day";

async function votd() {
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

module.exports = { votd }