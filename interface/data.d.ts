import { StaticImageData } from "next/image";

export interface ICard {
  title: string;
  fees: string;
  thumbnail: StaticImageData;
  href: string;
}

export interface IEventsData {
  date: string;
  title: string;
}
