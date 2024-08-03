export interface IColumns<T> {
  title: string;
  name: string;
  valueColumn: (element: T) => string | number | Date | boolean
  type: typesColumns;
  link?: string;
  icon?: string;
  color?: string;
}

export type typesColumns = 'string' | 'links' | 'icon' | 'boolean';

export interface IConfigTable {
  btnAdd: boolean;
}


export interface ISendDataTable {
  data: any;
  action: TypeActions;
}

export type TypeActions = 'add' | 'edit' | 'delete' | 'show';
