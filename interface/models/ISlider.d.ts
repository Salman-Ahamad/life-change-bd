import { IId } from ".";

export interface ISliderScheme {
  imgUrl: string;
}

export interface ISlider extends ISliderScheme, IId {}
