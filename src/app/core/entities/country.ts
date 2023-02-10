import { Currency } from './currency';
import { Flags } from './flag';
import { Language } from './language';
import { RegionalBlock } from './regional-block';

export interface Country {
    id: string,
    name: string,
    symbol: string,
    currencies: Currency[],
    capital: string,
    languages: Language[],
    flags: Flags,
    regionalBlocks: RegionalBlock[],
    borders: string[],
    population: number,
    timezones: string[]
}