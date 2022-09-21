export interface IStudent {
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
  fees: string;
}

export interface IObjetctStudent {
  content: IStudent[];
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

