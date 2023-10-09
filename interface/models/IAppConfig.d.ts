export interface IAppConfigSchema {
  for: "admin";
  baseFee: number;
  sliderImage: string[];
}

export interface IAppConfig extends IAppConfigSchema {
  id: string;
}
