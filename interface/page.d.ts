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
  setData: Dispatch<SetStateAction<IUser[] | any | null>>;
  onlyActive?: boolean;
  onlyInactive?: boolean;
  count?: boolean;
}

export interface IPageHeader {
  title: string;
  notice: string;
  setData?: Dispatch<SetStateAction<IUser[] | null>>;
  onlyActive?: boolean;
}

export interface IPopUp {
  user: IUser;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectUser: Dispatch<SetStateAction<IUser | null | undefined>>;
}

export interface IUserCourse {
  sahihHolyQuran: number;
  photoEditing: number;
  videoEditing: number;
  leadGeneration: number;
  digitalMarketing: number;
  graphicDesign: number;
  peopleManagement: number;
  facebookMarketing: number;
  mailMarketing: number;
  youTubeContentCreating: number;
}
export interface IGlTrainer {
  gl: {
    phone: string;
  };
  trainer: {
    phone: string;
  };
}
