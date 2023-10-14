import { months } from "@/lib";

export const getLastThreeMonths = () => {
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const lastThreeMonths = [];
  const years: number[] = [];

  for (let i = 2; i >= 0; i--) {
    const index = (currentMonthIndex - i + 12) % 12;
    const monthName = months[index];
    lastThreeMonths.push(monthName);

    const year = index > currentMonthIndex ? currentYear - 1 : currentYear;
    !years.includes(year) && years.push(year);
  }

  return { mounts: lastThreeMonths, years };
};
