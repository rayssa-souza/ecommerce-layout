import { iProductItem } from "./product";

export interface iCategory {
  title: string;
  url: string;
}

export interface iCategoryDetail {
  title: string;
  id: string;
  parentCategory?: iCategory;
  products: iProductItem[];
}
