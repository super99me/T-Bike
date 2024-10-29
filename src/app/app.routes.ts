import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductListCartComponent } from './product/product-list-cart/product-list-cart.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';

export const routes: Routes = [
      {
        path: '', title: 'Trang Chủ', component: HomeComponent
      },
      {
        path: ':type/xem-chi-tiet/:id', title: 'Xem Chi Tiết', component: ProductDetailComponent,
      },
      {
        path: 'danh-sach/:type', title: 'Danh Sách Sản Phẩm', component: ProductListComponent,
      },
      {
        path: 'danh-sach-gio-hang', title: 'Danh Sách Giỏ Hàng', component: ProductListCartComponent,
      },
      { 
        path: ':type/so-sanh-san-pham', title: 'So Sánh Sản Phẩm', component: ProductCompareComponent 
      }
];
