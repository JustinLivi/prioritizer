import { range as createRange, padStart } from 'lodash';

import { Converter } from '../interfaces';

export interface Range {
  upper: number;
  lower?: number;
}

export interface NumericArgs {
  range?: Range;
  granularity: number;
}

const scaleValue = (num: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const constrain = (val: number, low: number, high: number): number => {
  if (val < low) return low;
  if (val > high) return high;
  return val;
};

export const scale = ({
  range: { upper, lower } = { upper: 1, lower: 0 },
  granularity,
}: NumericArgs): Converter<number> => (value) => {
  const upperBounds = parseInt(`1${createRange(0, granularity, 0).join('')}`, 10);
  const scaled = scaleValue(value, lower ?? 0, upper, 0, upperBounds);
  const constrained = constrain(scaled, 0, upperBounds);
  const rounded = Math.round(constrained);
  const padded = padStart(`${rounded}`, granularity, '0');
  console.log({ value, scaled, constrained, rounded, padded, upper, lower, granularity, upperBounds });
  return padded;
};
