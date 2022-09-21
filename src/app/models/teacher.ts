export interface ITeacher {
  id?: number;
  name: string;
  phone: string;
  email: string;
  cep: string;
  street: string;
  number: number;
  district: string;
  city: string;
  state: string;
  country: string;
  salary: string;
}

export interface IObjetctTeacher {
  content: ITeacher[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageAble: any;
  size: number;
  sort: any;
  totalElements: number;
  totalPages: number;
}
