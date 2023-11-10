/**
 *
 * @param item "true" | "false"
 * @description convert string to boolean
 * @returns true | false
 */

export const convertBoolean = (item: string): boolean =>
  JSON.parse(item.toLowerCase());
