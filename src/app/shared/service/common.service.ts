import { Injectable } from '@angular/core';
import { Constants } from '../common/constants';
import { provideRouter, Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public constant: Constants,
    private router: Router,
  ) { }

  category: string = '';
  lstCart: any[] = [];

  loadBreadcrumb(item: any) {
    switch (item) {
      case this.constant.TypeProduct.TreEm:
        this.category = 'Xe Đạp Trẻ Em';
        break;
      
      case this.constant.TypeProduct.TheThao:
        this.category = 'Xe Đạp Thể Thao';
        break;
    
      case this.constant.TypeProduct.DiaHinh:
        this.category = 'Xe Đạp Địa Hình';
        break;
    
      case this.constant.TypeProduct.Touring:
        this.category = 'Xe Đạp Touring';
        break;
    
      case this.constant.TypeProduct.Dua:
        this.category = 'Xe Đạp Đua';
        break;
    
      case this.constant.TypeProduct.PhoThong:
        this.category = 'Xe Đạp Phổ Thông';
        break;
    
      case this.constant.TypeProduct.Dien:
        this.category = 'Xe Đạp Điện';
        break;
    
      case this.constant.TypeProduct.ThuongHieu:
        this.category = 'Thương Hiệu';
        break;
    
      case this.constant.TypeProduct.PhuKien:
        this.category = 'Phụ Kiện';
        break;
    
      default:
        this.category = '';
    }
  }

  getCartItems() {
    return this.lstCart;
  }

  addCart(model: any, typeProduct: any) {
    model.type = typeProduct;
    const existingProduct = this.lstCart.find((item) => item.id === model.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.lstCart.push({ ...model, quantity: 1 });
    }
    this.showSuccess();
  }

  delCart(model: any) {
    this.lstCart = this.lstCart.filter((item) => item.id !== model.id);
  }

  getTotalPrice() {
    return this.lstCart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  detailProduct(id: any, type: any) {
    this.router.navigate([type + '/xem-chi-tiet/' + id]);
  }

  showSuccess() {
    
  }
}


