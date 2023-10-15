import { IId } from ".";

export interface IAppConfigSchema {
  for: "admin";
  baseFee: number;
  sliderImage: string[];
  support: {
    whatsApp: string;
    meeting: string;
    help: string;
  };
  whatsAppMessage: string;
}

export interface IAppConfig extends IAppConfigSchema, IId {}
