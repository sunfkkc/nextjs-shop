export interface productState {
  product: prodOne[];
}

export interface prodOne {
  id: number;
  brand: string;
  name: string;
  description: string;
  image_link: string;
  price: string;
}
