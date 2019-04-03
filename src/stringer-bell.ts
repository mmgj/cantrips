/**
 * Takes an array of strings and an optional config object
 *  and returns something a bit more human readable.
 * I.e. ['Tom', 'Dick', 'Harry'] -> 'Tom, Dick and Harry'
 */

interface GrammarConfig {
  oxford?: boolean;
  and?: string;
  andThen?: string;
}

const defaults: GrammarConfig = {
  oxford: false,
  and: 'and',
  andThen: '.',
};

export const humanizeList = (
  list: string[],
  config?: GrammarConfig,
): string => {
  if (list.length <= 1) return list.toString();
  const resolved = {
    ...defaults,
    ...config,
  };
  const { oxford, and, andThen } = resolved;
  const lastItem = list[list.length - 1];
  const allButLastItem = list.slice(0, list.length - 1);
  const oxfordComma = oxford && list.length >= 3 ? ',' : '';
  const andSpace = and && and.length <= 0 ? '' : ' ';

  return `${allButLastItem.join(', ')}${oxfordComma}${andSpace}${and} ${lastItem}${andThen}`;
};

export { humanizeList as thingCommaThingAndThing };
