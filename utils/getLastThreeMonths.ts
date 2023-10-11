import { months } from "@/lib";

export const getLastThreeMonths = () => {
  const currentMonthIndex = new Date().getMonth();
  const lastThreeMonths = [];

  for (let i = 2; i >= 0; i--) {
    const index = (currentMonthIndex - i + 12) % 12;
    lastThreeMonths.push(months[index]);
  }

  return lastThreeMonths;
};
