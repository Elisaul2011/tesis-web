export interface IFormulario {
  title: string;
  dataForm: IDataForm[];
  completedFoms?: string[]
}

export interface IDataForm {
  typeInput: InputsTypes;
  label: string;
  formControl: string;
  required: boolean;
  disabled: boolean;
  value: string | number | boolean | any;
  option?: IOptions[];
  main?: boolean;
  autocomplete?: boolean;
  autoFill?: boolean;
  detectChange?: boolean;
}

export interface IOptions{
  label: string;
  value: string | number;
  data?: any;
}

export interface ReturnSelect {
  formControl: string;
  value: string | number | boolean | any;
}

export type InputsTypes = 'text' | 'number' | 'date' | 'select' |'boolean' | 'selectMulti' | 'password' | '';
