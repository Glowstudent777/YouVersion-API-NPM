import axios from 'axios'
import * as cheerio from 'cheerio';
import { getVotd } from './functions/votd';

export async function getVerseOfTheDay() {
    const data = await getVotd();
    return data;
}
