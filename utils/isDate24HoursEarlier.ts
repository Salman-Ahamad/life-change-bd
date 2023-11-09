export const is24HoursEarlier = (inputDate: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return inputDate < today;
  // Let me make a function that takes a parameter date and returns me whether it is 24 hours earlier than the current time. in typescript
  // const currentDate = new Date();
  // const twentyFourHoursAgo = new Date(currentDate);
  // twentyFourHoursAgo.setHours(currentDate.getHours() - 24);
  // return inputDate.getTime() <= twentyFourHoursAgo.getTime();
};
