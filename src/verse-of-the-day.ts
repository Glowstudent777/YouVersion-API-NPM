import axios from 'axios';
import cheerio from 'cheerio';

export async function s() {
    const url = 'https://www.biblegateway.com/passage/?search=Psalms%2022:9-10&version=NLT';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $('.line').each((i, el) => {
       
        const footnotes = $(el).text().replaceAll(/<\/?[a-zA-Z0-9=" ]*>/g, ' ').replace(/\s\s+/g, ' ').trim();
        console.log(footnotes);
    });
}
