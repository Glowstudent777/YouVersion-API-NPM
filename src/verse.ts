import axios from 'axios';
import cheerio from 'cheerio';

export async function getVerse(book: string, passage: string, version: string = "NLT") {
    const url = `https://www.biblegateway.com/passage/?search=${book}%20${passage}&version=${version}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);


    const passageContent = $('meta[property="og:description"]').attr('content');

    // Scrape the footnotes
    let footnotes = '';
    $('.footnotes li').each((i, elem) => {
        const footnote = $(elem).text().trim();
        footnotes += footnote + ' ';
    });

    footnotes = footnotes.trim();

    if (!passageContent) {
        return {
            "code": 400,
            "message": `Could not find passage ${book} ${passage} ${version}`
        };
    }
 
    return footnotes
        ? { 'citation': `${book} ${passage} ${version}`, 'passage': passageContent, "footnotes": footnotes }
        : { 'citation': `${book} ${passage} ${version}`, 'passage': passageContent };
}
