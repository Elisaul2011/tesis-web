export interface IColumns {
  title: string;
  name: string;
  type: typesColumns;
  link?: string;
}

export type typesColumns = 'string' | 'links';
