import { IFontWeight } from "@/interface";

export const findFontWeight = (font: IFontWeight) =>
  (font === "400" && "font-normal") ||
  (font === "500" && "font-medium") ||
  (font === "600" && "font-semibold") ||
  (font === "700" && "font-bold") ||
  (font === "800" && "font-extrabold") ||
  (font === "900" && "font-black");
