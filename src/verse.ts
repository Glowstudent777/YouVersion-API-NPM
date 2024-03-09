import axios from 'axios';
import * as cheerio from 'cheerio';

interface BookType {
    book: string;
    aliases: string[];
    chapters: number;
}

export async function getVerse(book: string, chapter: string, verses: string, version = "NIV") {
    const versions = require('./versions.json');
    const bookList = require('./books.json');
    const baseURL = "https://www.bible.com/bible";

    if (!book) return { code: 400, message: "Missing field 'book'" };

    const versionKey = Object.keys(versions).find(key => key.toLocaleUpperCase() === version.toLocaleUpperCase()) || "NIV";
    const versionFinder = { version: versionKey, id: versions[versionKey] };

    const bookFinder = bookList.books.find((o: BookType) => o.book.toLowerCase() === book.toLowerCase() || o.aliases.includes(book.toUpperCase()));
    if (!bookFinder) return { code: 400, message: `Could not find book '${book}' by name or alias.` };

    const URL = `${baseURL}/${versionFinder.id}/${bookFinder.aliases[0]}.${chapter}.${verses}`;

    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        if (!$(".ChapterContent_reader__UZc2K").eq(-1).text().trim() || chapter > bookFinder.chapters) return { code: 400, message: "Verse or Chapter not found." };

        const versesArray = $(".text-19").map((_, p) => $(p).text().replace(/\n/g, ' ')).get();
        const citationsArray = $(".text-text-light").map((_, p) => $(p).text()).get();

        return { citation: citationsArray[0], passage: versesArray[0] };
    } catch (err) {
        console.error(err);
    }
}
