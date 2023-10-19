import { Types } from "mongoose";
import { Dispatch, SetStateAction } from "react";
import { IUser } from ".";

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
  date: Date;
  id: Types.ObjectId;
}

export interface ISearchBar extends ISetSearchData {
  setData: Dispatch<SetStateAction<IUser[] | null>>;
  onlyActive?: boolean;
}

export interface IPageHeader {
  title: string;
  notice: string;
  setData?: Dispatch<SetStateAction<IUser[] | null>>;
  onlyActive?: boolean;
}
