const celciusToF = (value: number) => {
  return (value * 9) / 5 + 32;
};

const fahrenheitToC = (value: number) => {
  return ((value - 32) * 5) / 9;
};

export { celciusToF, fahrenheitToC };
