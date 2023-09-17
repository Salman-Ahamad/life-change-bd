import { IClassName } from "./common";

export interface IFriend extends IClassName {
  minWidth: string;
  minHeight: string;
  position?: string;
  bgImage: StaticImageData;
  img: StaticImageData;
  bgPosition: string;
  playButton?: boolean;
  rattingCard?: boolean;
}

export interface IRattingCard extends IClassName {
  title: string;
  des: string;
  ratting: number;
  mob?: boolean;
  length?: number;
  currentIndex?: number;
}
