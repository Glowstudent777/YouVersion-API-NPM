import axios from 'axios';
import cheerio from 'cheerio';

export async function getVerse(book: string, passage: string, version: string = "NLT") {
    const url = `https://www.biblegateway.com/passage/?search=${book}%20${passage}&version=${version}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Get the content within the meta tag with property og:description
    const passageContent = $('meta[property="og:description"]').attr('content');

    if (!passageContent) {
        return {
            "code": 400,
            "message": `Could not find passage ${book} ${passage} ${version}`
        };
    }

    return { 'citation': `${book} ${passage} ${version}`, 'passage': passageContent }

}
