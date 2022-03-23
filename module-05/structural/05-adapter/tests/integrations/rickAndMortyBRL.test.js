import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import fs from 'fs/promises';
import Character from '../../src/entities/character.js';
import RickAndMortyBRL from '../../src/business/integrations/rickAndMortyBRL.js'
import axios from 'axios';

describe('# RickAndMortyBRL', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharactersFromJSON Should return a list of Character Entity', async () => {
        const response = JSON.parse(await fs.readFile('./tests/mocks/characters.json'));
        const expected = response.results.map((char) => new Character(char));

        jest.spyOn(axios, "get").mockResolvedValue({ data: response });

        const result = await RickAndMortyBRL.getCharactersFromJSON();

        expect(result).toStrictEqual(expected);
    });
    test('#getCharactersFromJSON Should return an empty list if the API return nothing', async () => {
        const response = JSON.parse(await fs.readFile('./tests/mocks/characters-empty.json'));
        const expected = response.results;

        jest.spyOn(axios, "get").mockResolvedValue({ data: response });

        const result = await RickAndMortyBRL.getCharactersFromJSON();

        expect(result).toStrictEqual(expected);
    });
});