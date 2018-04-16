import { toNumber } from './../../helper/number';
import { ERROR_VALUE, } from './../../error';
import {undefinedCell} from './../../helper/undefined-cell';
import Decimal from 'decimal.js';

export const SYMBOL = '*';

export default function func(first, ...rest) {
  try {
    first = undefinedCell(first);

    for (var i = 0; i < rest.length; i++) {
      rest[i] = undefinedCell(rest[i]);
    }

    const result = rest.reduce((acc, value) => {
      return (new Decimal(acc)).mul(new Decimal(value)).toNumber();
    }, first);

    if (isNaN(result)) {
      throw Error(ERROR_VALUE);
    }

    return result;
  } catch (error) {
    throw Error(ERROR_VALUE);
  }
};

func.SYMBOL = SYMBOL;
