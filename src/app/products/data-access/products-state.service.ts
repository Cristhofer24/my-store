import { inject, Injectable } from '@angular/core';
import { Product } from '../../component/interface/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { catchError, map, of, startWith, Subject, switchMap } from 'rxjs';
interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
  page: number;
}
@Injectable()
export class ProductsStateService {
  private productService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1,

  };
  changePage$= new Subject<number>();

  loadProducts$=this.changePage$.pipe(
    startWith(1),
    switchMap(()=> this.productService.getProducts()),
    map((products) => ({ products, status: 'success' as const })),
    catchError(()=>{
      return of({
       products: [],
       status: 'error' as const,
      })
    })
  );

  state = signalSlice({
    initialState: this.initialState,

    sources: [
      this.changePage$.pipe(
        map((page) => ({ page, status: 'loading' as const }))
      ),
      this.loadProducts$,
    ],
  });

}
