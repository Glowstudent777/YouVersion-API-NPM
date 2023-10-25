import axios from 'axios'
import * as cheerio from 'cheerio';

export async function getVerseOfTheDay() {
    const URL = "https://www.bible.com/verse-of-the-day";
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const versesArray: Array<String> = [];
        const citationsArray: Array<String> = [];
        const verses = $("p.text-gray-50");
        const citations = $(".mbs-2");

        await citations.each((i, p) => {
            let citation = $(p).eq(0).text();
            citationsArray.push(citation)
        })

        await verses.each((i, p) => {
            let unformattedVerse = $(p).eq(0).text();
            let formattedVerse = unformattedVerse.replace(/\n/g, ' ');
            versesArray.push(formattedVerse)
        })

        return {
            citation: citationsArray[1],
            passage: versesArray[0]
        }
    } catch (err) {
        console.error(err);
    }
}