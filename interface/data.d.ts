import { IClassName, ILinkIcon, ILinkLabel } from "./common";

export interface IAppDownloads extends ILinkIcon {
  mobIcon: StaticImageData;
}

export interface ITailored extends IClassName {
  img: StaticImageData;
  title: string;
  des: string;
  width?: "sm" | "md";
}

export interface ICardData {
  id: number;
  imageURL: StaticImageData | string;
}

export interface IMenuItem extends ILinkLabel {
  label: string;
  option?: IMenuOption[];
}
