/**
 *
 * @param year Provide any year like-(2023)
 * @param month Provide any year like-(01)
 * @param date Provide date from the calendar / input:date
 * @description JavaScript months are 0-based, so we subtract 1 from the provided month to get the correct month value for the Date constructor
 * @returns Number
 */

export const createDate = (
  year: number,
  month: number,
  date?: Date
): Number => {
  if (date) {
    return new Date(date).getTime();
  } else {
    const newDate = new Date(year, month - 1);
    return newDate.getTime();
  }
};
