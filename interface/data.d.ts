import { StaticImageData } from "next/image";

export interface ICardData {
  title: string;
  fees: string;
  thumbnail: StaticImageData;
  href: string;
}

export interface IEventsData {
  date: string;
  title: string;
}
