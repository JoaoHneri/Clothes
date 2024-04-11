export interface Product {
    productName: string;
    productPrice: number;
    productSizes: { size: string; quantity: number }[];
    productCategory: string;
    productDescription: string;
    productQuantity: number;
  }