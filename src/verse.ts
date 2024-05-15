import axios from 'axios'
import * as cheerio from 'cheerio';
import { getVerse as getVerseFunc } from './functions/verse';


interface bookType {
    book: String;
    aliases: Array<String>;
    chapters: Number;
}

export async function getVerse(book: string, chapter: string, verses: string, version: string = "NIV") {
    function apiError(code: number, message: string) {
        return {
            "code": code,
            "message": message
        };
    }
    if (!book) return apiError(400, "Missing field 'book'");

    const data: any = await getVerseFunc(book, chapter.toString(), verses.toString(), version.toString());

    if (data?.code) return apiError(data.code, data.message);
    else return data;
}