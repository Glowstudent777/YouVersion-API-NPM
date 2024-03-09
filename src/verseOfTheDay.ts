import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getVerseOfTheDay() {
    try {
        const { data } = await axios.get("https://www.bible.com/verse-of-the-day");
        const $ = cheerio.load(data);

        const versesArray = $("p.text-gray-50").map((_, p) => $(p).text().replace(/\n/g, ' ')).get();
        const citationsArray = $(".mbs-2").map((_, p) => $(p).text()).get();

        return { citation: citationsArray[1], passage: versesArray[0] };
    } catch (err) {
        console.error(err);
    }
}
