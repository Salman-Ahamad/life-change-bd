import { IColor, IText } from "./common";

export interface IChildren {
  children: ReactNode;
}

export interface IClassName {
  className?: string;
}

export interface IChildrenWithClassName extends IChildren, IClassName {}

export interface ITitleVariant {
  variant: "H1" | "H2" | "H3" | "H4" | "H5";
}

export interface ITitle extends IChildrenWithClassName, ITitleVariant {
  color?: IColor;
}

export interface IH extends IChildrenWithClassName, ITitleVariant {}

export interface ICommonText extends IChildrenWithClassName {}

export interface ILabel extends IText, IChildrenWithClassName {
  color?: IColor;
  uppercase?: boolean;
}

export interface ICTA extends IChildrenWithClassName {}

export interface IButton extends IChildrenWithClassName {
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "accent";
}

export interface IBgContainer
  extends IChildrenWithClassName,
    IBackgroundImage {}

export interface IBackgroundImage extends IChildrenWithClassName {
  img: StaticImageData;
  mobImg?: StaticImageData;
}

export interface IAbsoluteImg extends IClassName {
  img: StaticImageData;
  alt?: string;
  width?: string;
  zIndex?: string;
}
