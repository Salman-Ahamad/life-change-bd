import { StaticImageData } from "next/image";
import { IChildrenWithClassName } from ".";

export type IColor = "black" | "white" | "transparent";

export type IFontWeight = "400" | "500" | "600" | "700" | "800" | "900";

export type IFontFamily = "sora" | "source-sans" | "lato";

export interface IText extends IChildrenWithClassName {
  fontWeight?: IFontWeight;
  fontFamily?: IFontFamily;
}

export interface IMainContainer extends IChildrenWithClassName {
  bgColor?: IColor;
}

export interface ILogo extends IClassName {
  link?: string;
  variant?: "black" | "white";
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

export interface IOpen {
  setOpen: (value: SetStateAction<boolean>) => void;
  open?: boolean;
}

export interface IActiveLink {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
  isActive: (link: string) => boolean;
}

export interface IActiveLinkAndCloseMenu {
  setActiveLinkAndCloseMenu: (label: string) => void;
}

export interface IMenuOption {
  icon: StaticImageData;
  link: string;
  label: string;
}

export interface IDropdown
  extends IActiveLink,
    IActiveLinkAndCloseMenu,
    ILinkLabel {
  dropdownItems: IMenuOption[];
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
export interface ISpace extends IClassName {
  topSpace?: boolean;
}

export interface IAppDownload extends IClassName {
  small?: boolean;
  gap?: "12px" | "17.5px" | "20px";
  flex?: boolean;
  hidden?: "mob" | "tab" | "web";
  mobWidth?: string;
}

export interface IFormikError extends IClassName {
  name: string;
  component?: string;
}

export interface ISectionHeader extends IClassName {
  label: string;
  title: string;
  text?: string;
  btn?: JSX.Element;
  titleMaxWidth: string;
  textMaxWidth?: string;
}
