export const createDate = (year: number, month: number): Number => {
  // JavaScript months are 0-based, so we subtract 1 from the provided month
  // to get the correct month value for the Date constructor
  const date = new Date(year, month - 1);
  return date.getTime();
};
