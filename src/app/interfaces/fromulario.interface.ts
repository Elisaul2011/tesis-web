export interface IFormulario {
  title: string;
  dataForm: IDataForm[];
}

export interface IDataForm {
  typeInput: InputsTypes;
  label: string;
  formControl: string;
  required: boolean;
  value: string | number | boolean | any;
  option?: IOptions[];
  main?: boolean;
  detectChange?: boolean;
}

export interface IOptions{
  label: string;
  value: string | number
}

export interface ReturnSelect {
  formControl: string;
  value: string | number | boolean | any;
}

export type InputsTypes = 'text' | 'number' | 'date' | 'select' |'boolean' | 'selectMulti' | '';
