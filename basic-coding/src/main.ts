type SumFunction = (a: string, b: string) => number;

export const sum: SumFunction = (a, b) => {
  const _a = +a;
  const _b = +b;

  const isInputsValid = !(isNaN(_a) || isNaN(_b));

  if (!isInputsValid) throw new Error('The given values can be only number');

  return _a + _b;
};
