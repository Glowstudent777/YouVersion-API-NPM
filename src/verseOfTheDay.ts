import axios from 'axios'
import * as cheerio from 'cheerio';
import { getVotd } from './core/functions/votd';

export async function getVerseOfTheDay(lang: string = "en") {
    const data = await getVotd(lang);
    return data;
}