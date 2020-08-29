import { reduceRight } from 'lodash';
import { Converter } from 'src/interfaces';

export class Prioritizer<ArgTypes extends unknown[]> {
  public readonly converters: { [K in keyof ArgTypes]: Converter<ArgTypes[K]> };

  constructor(...converters: { [K in keyof ArgTypes]: Converter<ArgTypes[K]> }) {
    this.converters = converters;
  }

  public convert(...args: ArgTypes): number {
    return parseInt(
      reduceRight(args, (prev, curr, index) => this.converters[index](curr) + prev, ''),
      10,
    );
  }
}
