import sum from './sum';

describe('sum function', () => {
  it.each`
    mockA   | mockB  | expected
    ${'1'}  | ${'2'} | ${'3'}
    ${'-1'} | ${'2'} | ${'1'}
  `('should return summary of given number', ({ mockA, mockB, expected }) => {
    // Act
    const actual = sum(mockA, mockB);

    // Assert
    expect(typeof actual).toBe('string');
    expect(actual).toBe(expected);
  });

  it.each`
    mockA     | mockB
    ${'abcd'} | ${'1'}
    ${'1'}    | ${'abcd'}
    ${'ab'}   | ${'cd'}
  `('should throw error when input is NaN', ({ mockA, mockB }) => {
    // Arrange
    const expected = new Error('The given values can be only number');

    // Act & Assert
    expect(() => sum(mockA, mockB)).toThrow(expected);
  });
});
