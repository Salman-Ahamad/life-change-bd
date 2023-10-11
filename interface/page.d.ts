import { Dispatch, SetStateAction } from "react";

export interface IUploadImage {
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
}

export interface IEditProfile {
  firstName?: string;
  lastName?: string;
}

export interface IChangePassword {
  oldPassword?: string;
  newPassword?: string;
  reTypePassword?: string;
}

export interface ISearchData {
  year: string;
  month: string;
  id: string;
}

export interface ISearchBar extends ISetSearchData {
  setSearchData: Dispatch<SetStateAction<ISearchData>>;
}

export interface IPageHeader {
  title: string;
  notice: string;
  setSearchData?: Dispatch<SetStateAction<ISearchData>>;
}
