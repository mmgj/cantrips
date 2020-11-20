import { getRandomInt } from './fourty-two';

export const randomFrom = (input: []): any =>
  input[getRandomInt(0, input.length - 1)];
