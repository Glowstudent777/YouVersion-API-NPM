import axios from 'axios';
import cheerio from 'cheerio';
import versions from './versions.json';
import bookList from './books.json';

interface BookType {
    book: string;
    aliases: string[];
    chapters: number;
}

export async function getVerse(book: string, chapter: string, verses: string, version = "NIV") {
    const baseURL = "https://www.bible.com/bible";

    if (!book) return { code: 400, message: "Missing field 'book'" };

    const versionKey = Object.keys(versions).find(key => key.toUpperCase() === version.toUpperCase()) || "NIV";
    const versionId = versions[versionKey];

    const bookData = bookList.books.find((o: BookType) => o.book.toLowerCase() === book.toLowerCase() || o.aliases.includes(book.toUpperCase()));
    if (!bookData) return { code: 400, message: `Could not find book '${book}' by name or alias.` };
    if (parseInt(chapter) > bookData.chapters || parseInt(chapter) < 1) return { code: 400, message: `Invalid chapter '${chapter}' for book '${book}'.` };

    const URL = `${baseURL}/${versionId}/${bookData.aliases[0]}.${chapter}.${verses}`;

    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const versesArray = $(".text-19").map((_, p) => $(p).text().replace(/\n/g, ' ')).get();
        const citationsArray = $(".text-text-light").map((_, p) => $(p).text()).get();

        if (!versesArray.length || !citationsArray.length) return { code: 400, message: `Could not find verse '${verses}' in chapter '${chapter}' of book '${book}'.` };

        return { citation: citationsArray[0], passage: versesArray[0] };
    } catch (err) {
        console.error(err);
        return { code: 500, message: "An error occurred while fetching the verse." };
    }
}
