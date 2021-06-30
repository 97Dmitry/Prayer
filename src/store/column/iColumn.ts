export interface IColumn {
  title: string;
  description: string;
  id: number;
  userId: number;
}

export interface INewColumn {
  title: string;
  description: string;
}
export interface IUpdateColumn {
  id: number;
  title: string;
  description: string;
}

export interface IState {
  columns: Record<number, IColumn>;
  currentColumn: IColumn;
}
