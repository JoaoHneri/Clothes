export interface ProductReceiver {

    productName: string;
    productPrice: number;
    productSizes: { size: string }[];
    productCategory: string;
    productDescription: string;
    productQuantity: number;
    src: File;

  }