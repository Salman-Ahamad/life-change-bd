import { StaticImageData } from "next/image";

export interface ICardData {
  title: string;
  fees?: string;
  thumbnail: StaticImageData;
  href: string;
}

export interface IEventsData {
  date: string;
  title: string;
}

export interface IFooterData {
  title: string;
  policy: {
    title: string;
    href: string;
  }[];
  option: {
    title?: string;
    text?: string;
    copyright?: string;
  }[];
  socialIcons: {
    icon: any;
    href: string;
  }[];
}

export interface IFaqList {
  q: string;
  a: string;
}

export interface IDataTable {
  title?: string;
  tableHeaders?: string[];
  dataProperties: string[];
  tableData: Record<string, any>[];
}

export interface IDataTableWithImage {
  title?: string;
  tableData: Record<string, any>[];
}

export interface IUserDataForDataTable {
  id: string;
  image: string;
  firstName: string;
  email: string;
  phone: string;
  lastName: string;
  balance: number;
  status?: string;
}
