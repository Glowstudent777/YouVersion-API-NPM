import axios from 'axios'
import * as cheerio from 'cheerio';

export async function getVerseOfTheDay() {
    const URL = "https://www.bible.com/verse-of-the-day";
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const versesArray: Array<String> = [];
        const citationsArray: Array<String> = [];
        const verses = $(".bible-1lfxuq7");
        const citations = $(".bible-l9gg9c");

        await verses.each((i, p) => {
            let unformattedVerse = $(p).eq(0).text();
            let formattedVerse = unformattedVerse.replace(/\n/g, ' ');
            versesArray.push(formattedVerse)
        })

        await citations.each((i, p) => {
            let citation = $(p).eq(0).text();

            citationsArray.push(citation)
        })

        return {
            citation: citationsArray[0],
            passage: versesArray[0]
        }
    } catch (err) {
        console.error(err);
    }
}