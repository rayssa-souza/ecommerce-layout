import { iCategory } from "../@types/category";

export interface iProductItem {
  title: string;
  category?: string;
  subcategory: string;
  image: string;
  price: number;
  url: string;
  id: string;
}

type Spec = {
  title: string;
  description: string;
};

export interface iProductDetail {
  title: string;
  ratings: number;
  price: number;
  id: string;
  image: string[];
  description: string;
  addiotional_information: string;
  parentCategory: iCategory;
  subcategory: iCategory;
  specs: Spec[];
}

export interface iCartProduct extends iProductDetail {
  quantity: number;
  url?: string;
}

export type FavoriteProduct = iCartProduct | iProductItem;
