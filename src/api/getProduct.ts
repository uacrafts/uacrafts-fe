import axios from "axios";

export interface Seller {
  id: number;
  title: string;
  city: string;
  is_displayed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Price {
  id: number;
  regular_price: string;
  special_price: string;
  discount_percentage: string;
}

export interface Brand {
  id: number;
  title: string;
  logo: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  parent: null | number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  title: string;
  seller: Seller;
  price: Price;
  brand: Brand;
  category: Category;
  image_urls: string[];
  description: string;
  quantity_in_stock: number;
  created_at: string;
  updated_at: string;
}

export const getProduct = async (): Promise<Product> => {
  const response = await axios.get<Product>(
    "https://craft-land.koyeb.app/api/products/2",
  );
  return response.data;
};
