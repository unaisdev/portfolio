declare namespace NodeJS {
  export enum Mode {
    PROD = "PRODUCTION",
    DEV = "DEVELOP",
  }

  export interface ProcessEnv {
    readonly MODE: string;
  }
}
