const { calculateExpression, normalizeExpression } = require('../assets/js/script.js');

describe('Calculator Expression Tests', () => {
  beforeEach(() => {
    global.LAST_RESULT = 0;
  });

  describe('calculateExpression', () => {
    it('should calculate simple addition', () => {
      expect(calculateExpression('2 + 3')).toBe(5);
    });

    it('should calculate simple subtraction', () => {
      expect(calculateExpression('5 - 2')).toBe(3);
    });

    it('should calculate simple multiplication', () => {
      expect(calculateExpression('4 * 3')).toBe(12);
    });

    it('should calculate simple division', () => {
      expect(calculateExpression('10 / 2')).toBe(5);
    });

    it('should calculate with parentheses', () => {
      expect(calculateExpression('(2 + 3) * 4')).toBe(20);
    });

    it('should handle decimal numbers', () => {
      expect(calculateExpression('3.5 * 2')).toBe(7);
    });

    it('should handle negative numbers', () => {
      expect(calculateExpression('5 - 10')).toBe(-5);
    });

    it('should handle exponentiation', () => {
      expect(calculateExpression('2 ** 3')).toBe(8);
    });

    it('should handle percent operator', () => {
      expect(calculateExpression('50 * 20%')).toBe('Error');
    });

    it('should use ans for previous result', () => {
      expect(calculateExpression('ans + 5')).toBe(5);
    });

    it('should handle math constants', () => {
      expect(calculateExpression('e * 2')).toBeCloseTo(Math.E * 2, 10);
    });

    it('should handle pi constant', () => {
      expect(calculateExpression('pi / 2')).toBeCloseTo(Math.PI / 2, 10);
    });

    it('should return Error for invalid expressions', () => {
      expect(calculateExpression('2 / 0')).toBe('Error');
    });

    it('should return Error for non-numeric results', () => {
      expect(calculateExpression('2 + abc')).toBe('Error');
    });

    it('should return Error for NaN results', () => {
      expect(calculateExpression('0 / 0')).toBe('Error');
    });
  });

  describe('normalizeExpression', () => {
    it('should convert asin to asinDeg', () => {
      expect(normalizeExpression('asin(30)')).toBe('asinDeg(30)');
    });

    it('should convert acos to acosDeg', () => {
      expect(normalizeExpression('acos(45)')).toBe('acosDeg(45)');
    });

    it('should convert atan to atanDeg', () => {
      expect(normalizeExpression('atan(60)')).toBe('atanDeg(60)');
    });

    it('should convert sin to sinDeg', () => {
      expect(normalizeExpression('sin(30)')).toBe('sinDeg(30)');
    });

    it('should convert cos to cosDeg', () => {
      expect(normalizeExpression('cos(60)')).toBe('cosDeg(60)');
    });

    it('should convert tan to tanDeg', () => {
      expect(normalizeExpression('tan(45)')).toBe('tanDeg(45)');
    });

    it('should convert asinh to asinh', () => {
      expect(normalizeExpression('asinh(30)')).toBe('asinh(30)');
    });

    it('should convert sinh to sinh', () => {
      expect(normalizeExpression('sinh(30)')).toBe('sinh(30)');
    });

    it('should convert e to Math.E', () => {
      expect(normalizeExpression('calculate e')).toBe('calculate Math.E');
    });

    it('should convert pi to Math.PI', () => {
      expect(normalizeExpression('pi * 2')).toBe('Math.PI * 2');
    });

    it('should handle multiple replacements', () => {
      expect(normalizeExpression('sin(30) + cos(60)')).toBe('sinDeg(30) + cosDeg(60)');
    });
  });
});