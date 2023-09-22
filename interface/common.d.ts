import { StaticImageData } from "next/image";
import { HTMLInputTypeAttribute } from "react";
import { ICardData, IChildrenWithClassName, IClassName } from ".";

export type IColor =
  | "black"
  | "white"
  | "transparent"
  | "primary"
  | "secondary"
  | "accent";

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

export interface IInput extends IClassName {
  name: string;
  as?: "textarea";
  select?: string[];
  fullWidth?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export interface IFormikError extends IClassName {
  name: string;
  component?: string;
}

export interface INav {
  navData: ILinkLabel[];
}

export interface IImageCard extends ICardData {
  cardWidth?: "3/1" | "2/1" | "1";
}

export interface IPrivacyPolicy {
  title?: string;
  content: string[];
}
export interface IPrivacyPolicyWithClass extends IPrivacyPolicy {
  className?: string;
}

export interface ITost {
  label: string;
  btnText: string;
}

export interface INaveData {
  common: ILinkLabel[];
  inActive: ILinkLabel[];
  active: ILinkLabel[];
  profile: ILinkLabel[];
  withdrawal: ILinkLabel[];
  courses: ILinkLabel[];
  instantRedeem: ILinkLabel[];
  messages: ILinkLabel[];
  notification: ILinkLabel[];
  memo: ILinkLabel[];
  passbook: ILinkLabel[];
  paymentMethod: ILinkLabel[];
  redeemList: ILinkLabel[];
  refList: ILinkLabel[];
  joining: ILinkLabel[];
  meeting: ILinkLabel[];
  sendWish: ILinkLabel[];
  transferPoints: ILinkLabel[];
}
