import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import fs from 'fs/promises';
import Character from '../../src/entities/character.js';
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA.js'
import axios from 'axios';

describe('# RickAndMortyUSA', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharactersFromXML Should return a list of Character Entity', async () => {
        const response = await fs.readFile('./tests/mocks/characters.xml');
        const expected = [{"gender": "Male", "id": 10, "location": "Worldender's lair", "name": "Alan Rails", "origin": "unknown", "species": "Human", "status": "Dead", "type": "Superhuman (Ghost trains summoner)"}];

        jest.spyOn(axios, "get").mockResolvedValue({ data: response });

        const result = await RickAndMortyUSA.getCharactersFromXML();

        expect(result).toMatchObject(expected);
    });

    test('#getCharactersFromXML Should return an empty list if the API return nothing', async () => {
        const response = await fs.readFile('./tests/mocks/characters-empty.xml');
        const expected = [];

        jest.spyOn(axios, "get").mockResolvedValue({ data: response });

        const result = await RickAndMortyUSA.getCharactersFromXML();

        expect(result).toMatchObject(expected);
    });
});