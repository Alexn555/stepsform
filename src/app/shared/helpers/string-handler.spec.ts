import {
  capitalizeFirstLetter,
  convertToNAIfNullOrEmpty,
  lowercaseFirstLetter
} from './string-handler';

describe('Helper: string-handler', () => {

  it('capitalizeFirstLetter should capitalize first letter', () => {
    const name = capitalizeFirstLetter('name');
    expect(name).toBe('Name');
  });

  it('should return lowercase value from function toLowerCase', () => {
    const name = lowercaseFirstLetter('Name');
    expect(name).toBe('name');
  });

  describe('convertToNAIfNullOrEmpty', () => {
    it('should not convert normal text', () => {
      const name = convertToNAIfNullOrEmpty('hello');

      expect(name).toEqual('hello');
    });

    it('should convert to n/a if empty', () => {
      const name = convertToNAIfNullOrEmpty('');

      expect(name).toEqual('N/A');
    });

    it('should convert to N/A if null', () => {
      const person = convertToNAIfNullOrEmpty(null);

      expect(person).toEqual('N/A');
    });
  });
});
