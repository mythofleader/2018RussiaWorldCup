const expect = require('chai').expect;
const Helper = require('../../app/util/helper');


describe('Util Helper Class', () => {
  describe('convertKoreanDate', () => {
    it('raise type error', () => {
      // Given
      const invalidDates = ['', 1, true, [], {}, '2018-06-22 10:14:22'];

      for (const invalidDate of invalidDates) {
        try {
          // When
          Helper.convertKoreanDate(invalidDate);
        } catch (e) {
          // Result
          expect(e.message).to.equal('date');
          expect(e instanceof TypeError).to.equal(true);
        }
      }
    });

    it('return date', () => {
      // Given
      const date = new Date('2018-06-22 10:14:22');

      // When
      const koreanDate = Helper.convertKoreanDate(date);

      // Result
      expect(koreanDate).to.equal('06월 22일 금요일');
    });
  });

  describe('expCapitalOneLetterExp test', () => {
    it('return true', () => {
      // Given
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

      for (const letter of letters) {
        // When
        const result = Helper.expCapitalOneLetterExp.test(letter);

        // Result
        expect(result).to.equal(true);
      }
    });

    it('return false', () => {
      // Given
      const invalidLetters = ['ABC', 'dfklsdf', 'worldcup'];

      for (const invalidLetter of invalidLetters) {
        // When
        const result = Helper.expCapitalOneLetterExp.test(invalidLetter);

        // Result
        expect(result).to.equal(false);
      }
    });
  });

  describe('dateExp test', () => {
    it('return true', () => {
      // Given
      const date = '06월 15일 금요일';

      // When
      const result = Helper.dateExp.test(date);

      // Result
      expect(result).to.equal(true);
    });

    it('return false', () => {
      // Given
      const date = '06월 15일';

      // When
      const result = Helper.dateExp.test(date);

      // Result
      expect(result).to.equal(false);
    });
  });
});