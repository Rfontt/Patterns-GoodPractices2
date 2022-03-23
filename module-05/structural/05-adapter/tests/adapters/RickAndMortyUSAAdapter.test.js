import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA'
import RickAndMortyUSAAdapter from '../../src/business/adapters/rickAndMortyUSAAdapter.js';

describe('# RickAndMortyUSAAdapter', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharacters should be an adapter fot RickAndMortyUSA.getCharatersJSON', async () => {
        const brlIntegration = jest.spyOn(
            RickAndMortyUSA,
            RickAndMortyUSA.getCharactersFromXML.name
        ).mockResolvedValue([]);

        const result = await RickAndMortyUSAAdapter.getCharaters();

        expect(brlIntegration).toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});