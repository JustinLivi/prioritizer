import { scale } from 'src/converters/scale';
import { Prioritizer } from 'src/prioritizer';

const prioritizer = new Prioritizer(
  scale({
    range: { upper: 10 },
    granularity: 2,
  }),
  scale({
    range: { upper: 20 },
    granularity: 1,
  }),
);
prioritizer.convert(0, 1);
