import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import BaseBusiness from '../src/business/base/baseBusiness.js';
import { NotImplementedException } from '../src/utils/exceptions';

describe('#BaseBusiness', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('Should throw new an error when child class implements _validateRequiredFields function', () => {
        class ConcretClass extends BaseBusiness {}
        const concretClass = new ConcretClass();
        const validationError = new NotImplementedException(
            concretClass._validateRequiredFields.name
        );

        expect(() => concretClass.create({})).toThrow(validationError);
    });

    test('Should throw new an error when _validateRequiredFields returns false', () => {
        const VALIDATION_DOESNT_SUCCEDED = false;

        class ConcretClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEDED);
        }

        const concretClass = new ConcretClass();
        const validationError = new Error('invalid data');

        expect(() => concretClass.create({})).toThrow(validationError);
    });

    test('Should throw new an error when child class implements _create function', () => {
       const VALIDATION_SUCCEDED = true;

       class ConcretClass extends BaseBusiness {
           _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEDED);
       }

       const concretClass = new ConcretClass();
       const validationError = new NotImplementedException(
           concretClass._create.name
       );
       
       expect(() => concretClass.create({})).toThrow(validationError);
    });

    test('Should call _create and _validateRequiredFields on create', () => {
        const VALIDATION_SUCCEDED = true;
        const CREATE_SUCCEDED = true;
        
        class ConcretClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEDED);
            _create = jest.fn().mockReturnValue(CREATE_SUCCEDED);
        }

        const concretClass = new ConcretClass();
        const createFromBaseClass = jest.spyOn(
            BaseBusiness.prototype,
            BaseBusiness.prototype.create.name,
        );
        const result = concretClass.create({});

        expect(result).toBeTruthy();
        expect(createFromBaseClass).toHaveBeenCalled();
        expect(concretClass._create).toHaveBeenCalled();
        expect(concretClass._validateRequiredFields).toHaveBeenCalled();
    });
});