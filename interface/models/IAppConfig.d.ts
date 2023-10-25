import { IId } from ".";

export interface IAppConfigSchema {
  for: "admin";
  mainBalance: number;
  totalPendingFee: number;
  totalWithdraw: number;
  baseFee: number;
  withdrawalFee: number;
  sliderImage: string[];
  support: {
    whatsApp: string;
    meeting: string;
    help: string;
    welcomeClass: string;
  };
}

export interface IAppConfig extends IAppConfigSchema, IId {}
