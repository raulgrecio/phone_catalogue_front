export interface FeaturesResponse {
  name: string;
  value: string;
}

export interface SectionsResponse {
  name: string;
  features: FeaturesResponse[];
}

export interface FeaturedResponse {
  icon: string;
  name: string;
  value: string;
}

export interface ColorsResponse {
  name: string;
  color: string;
}

export interface PhoneResponse {
  _id: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  images: Array<string>;
  colors: ColorsResponse[];
  featured: FeaturedResponse[];
  sections: SectionsResponse[];
}

export interface ListPhonesResponse {
  results: PhoneResponse[];
  page: number;
  pages: number;
  count: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
