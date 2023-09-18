import { StaticImageData } from "next/image";
import { IChildrenWithClassName } from ".";

export type IColor = "black" | "white" | "transparent";

export type IFontWeight = "400" | "500" | "600" | "700" | "800" | "900";

export type IFontFamily = "sora" | "poppins" | "source-Sans-3";

export interface IText extends IChildrenWithClassName {
  fontWeight?: IFontWeight;
  fontFamily?: IFontFamily;
}

export interface IMainContainer extends IChildrenWithClassName {
  bgColor?: IColor;
}

export interface ILinkIcon {
  icon: StaticImageData;
  link: string;
  label?: string;
}

export interface ILinkLabel {
  link: string;
  label: string;
}

export interface IInput {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  withBtn?: boolean;
  btnLabel?: string;
  isSubmitting?: boolean;
  as?: "textarea";
}

export interface IFormikError extends IClassName {
  name: string;
  component?: string;
}

export interface INav {
  navData: ILinkLabel[];
}
