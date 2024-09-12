import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import ProductListComponent from './products/features/product-list/product-list.component';
import ProductDetailComponent from './products/features/product-detail/product-detail.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { warningGuard } from './guards/warning.guard';
import { NosotrosComponent } from './nosotros/nosotros.component';
// import { AdministradorComponent } from './administrador/administrador.component';


export const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.routes'),...canActivate (()=>redirectUnauthorizedTo(['/login']))},
  { path: 'products',component:ProductListComponent, ...canActivate (()=>redirectUnauthorizedTo(['/login']))},
  { path: 'product/:id',component:ProductDetailComponent},
  { path: 'nosotros',component:NosotrosComponent},

  // { path: 'dashboard',component:AdministradorComponent},
  { path: 'login',component:LoginComponent,canDeactivate: [warningGuard] },
  { path: 'register',component:RegisterComponent},

  {path:'**',redirectTo:''}
];
