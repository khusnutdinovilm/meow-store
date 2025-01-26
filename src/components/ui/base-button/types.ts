export enum BUTTON_TYPES {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERCIARY = "terciary",
}

export interface BaseButtonProps {
  labelText?: string;
  btnType?: BUTTON_TYPES;
}
