import { IId } from ".";

export interface IAppConfigSchema {
  for: "admin";
  baseFee: number;
  sliderImage: string[];
  meetings: string[];
  whatsAppMessage: string;
}

export interface IAppConfig extends IAppConfigSchema, IId {}
