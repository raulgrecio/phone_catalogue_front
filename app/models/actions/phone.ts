export interface IPhonesRequestState {
  type: String;
  page: string;
}

export interface IPhoneResponseState {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: Array<string>;
}

export interface ListPhonesResponseState {
  results: IPhoneResponseState[];
  error: string;
  page: number;
  pages: number;
  count: number;
}

export interface IPhonesResponseState<T> {
  response: {
    success: boolean;
    data: T;
    message: string;
  };
}
