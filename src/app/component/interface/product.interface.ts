
// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };



// }

export interface Product {
  id:string;
  name:string;
  categoria:string;
  tipo:string;
  descripcion:string;
  precio:number;
  image:string;
}
export interface ProductItemCart {
  product:Product;
  quantity: number;

}
