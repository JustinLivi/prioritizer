import 'jest-extended';

import { Prioritizer } from './prioritizer';
import { scale } from './converters/scale';

describe('prioritizer', () => {
  describe('convert', () => {
    it('should create a priority score', () => {
      const prioritizer = new Prioritizer(
        scale({
          range: { upper: 10 },
          granularity: 2,
        }),
        scale({
          range: { lower: 10, upper: 20 },
          granularity: 1,
        }),
      );
      const score = prioritizer.convert(5.5, 12);
      expect(score).toEqual(552);
    });
  });
});
