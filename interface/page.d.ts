import { Dispatch, SetStateAction } from "react";

export interface IUploadImage {
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
}

export interface IEditProfile {
  firstName?: string;
  lastName?: string;
}
