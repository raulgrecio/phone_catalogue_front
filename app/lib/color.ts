/**
 * Helper class to color
 */

type HexType = {
  match: (
    arg0: RegExp,
  ) => {
    (): any;
    new (): any;
    map: {(arg0: (x: any) => number): [number, number, number]; new (): any};
  };
};

/**
 * ES6 function for only handling 6 character hex with or without the '#':
 * @param hex
 * @param alpha
 *
 * sample:
 * hex2rgba('#af087b', .5)   // returns: rgba(175,8,123,0.5)
 * hex2rgba('af087b', .5)    // returns: rgba(175,8,123,0.5)
 * hex2rgba('af087b')        // returns: rgba(175,8,123,1)
 */
export const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex!.match(/\w\w/g)!.map((x: string) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
