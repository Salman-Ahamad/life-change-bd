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
export type IToastType = "default" | "success" | "info" | "error" | "warning";
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

export interface INavItem {
  link: string;
  label: string | JSX.Element;
}

export interface INav {
  navData: INavItem[];
}

export interface INavData {
  common: INavItem[];
  inActive: INavItem[];
  active: INavItem[];
  profile: INavItem[];
  withdrawal: INavItem[];
  courses: INavItem[];
  instantRedeem: INavItem[];
  messages: INavItem[];
  notification: INavItem[];
  memo: INavItem[];
  passbook: INavItem[];
  paymentMethod: INavItem[];
  redeemList: INavItem[];
  refList: INavItem[];
  joining: INavItem[];
  meeting: INavItem[];
  sendWish: INavItem[];
  transferPoints: INavItem[];
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

export interface ICourseData {
  title: string;
  img: StaticImageData;
  href: string;
  price?: string;
  content: string;
}
export interface IAPIResponse<T> {
  message: string;
  success: boolean;
  data: T;
}
