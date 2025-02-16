export interface ProductResource {
  name: string;
  description: string;
  url: string;
}


export interface GroupResource {
  name: string;
  resources: ProductResource[]
}


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  groupsResource: GroupResource[];
  details: string[];
}
