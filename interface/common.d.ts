import { StaticImageData } from "next/image";
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";
import { ICardData, IChildren, IChildrenWithClassName, IClassName } from ".";

export type IColor =
  | "black"
  | "white"
  | "transparent"
  | "primary"
  | "secondary"
  | "accent";

export type IMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December;";

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
  common?: INavItem[];
  inActive?: INavItem[];
  active?: INavItem[];
  profile?: INavItem[];
  withdrawal?: INavItem[];
  courses?: INavItem[];
  messages?: INavItem[];
  notification?: INavItem[];
  memo?: INavItem[];
  passbook?: INavItem[];
  paymentMethod?: INavItem[];
  redeemList?: INavItem[];
  refList?: INavItem[];
  myRef?: INavItem[];
  sendWish?: INavItem[];
  transferPoints?: INavItem[];
  profileEdit?: INavItem[];
  settings?: INavItem[];
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

export interface ITHeader {
  label: string | JSX.Element;
}

export interface ITbody extends ITHeader {
  href?: string;
}

export interface IRefTable {
  tableHeaders: string[];
  dataProperties: string[];
  tableData: any[];
  message?: string;
  actionBtn?: JSX.Element;
  setActionId?: (id: string) => void;
  UpdateSendWish?: boolean;
  slugUrl?: string;
}

export interface IFiledDate {
  date: Date | string | null;
  year: string;
  month: string;
  id: Types.ObjectId | string;
}

export interface ImageUploaderProps extends IClassName {
  fileType?: string;
  setFileUrl?: Dispatch<SetStateAction<string>>;
  setUpdatedData?: Dispatch<SetStateAction<object>>;
}

export interface IWaDeepLink {
  phoneNo: string;
  btnText: string;
  message?: string;
  groupLink?: string;
}

export interface ISendWish extends IWaDeepLink {
  userId: string;
  data: object;
}

export interface IWaShareLink extends IWaDeepLink {
  userId: string;
}

export interface IGoogleMeetDeepLink extends IChildren {
  meetId: string;
  startTime?: string;
  endTime?: string;
}

export interface ProfileInputProps {
  name: string;
  label: string;
  onlyText?: boolean;
  isActive?: boolean;
  defaultValue: string;
  selectOption?: string[];
  onChange: (value: any) => void;
  setFieldValue?: Dispatch<SetStateAction<string>>;
  addActiveBonus?: () => void;
}
