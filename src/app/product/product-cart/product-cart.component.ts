import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../shared/service/common.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent implements OnInit {
  constructor(
    private activeModal: NgbActiveModal,
    public comSer: CommonService,
    private router: Router
  ) {}

  lstCarts: any[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  // Hàm load giỏ hàng
  loadCart() {
    this.lstCarts = this.comSer.getCartItems();
    this.totalPrice = this.comSer.getTotalPrice();
  }

  // Hàm xóa sản phẩm khỏi danh sách giỏ hàng
  removeItem(product: any) {
    this.comSer.delCart(product);
    this.loadCart();
  }

  closeModal() {
    this.activeModal.close();
  }

  // Hàm xem danh sách giỏ hàng
  getListProductCart() {
    this.activeModal.close();
    this.router.navigate(['danh-sach-gio-hang']);
  }

  // Hàm xem chi tiết sản phẩm
  detail(itemId: any, type: string) {
    this.closeModal();
    this.comSer.detailProduct(itemId, type);
  }

  // Hàm cộng số lượng sản phẩm
  increaseQuantity(item: any) {
    item.quantity++;
    this.updateTotalPrice();
  }

  // Hàm giảm số lượng (không cho về dưới 1)
  decreaseQuantity(item: any) {
    if (item.quantity === 0 || !item.quantity) {
      item.quantity = 1;
    }
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotalPrice();
    }
  }

  // Hàm cập nhật tổng tiền
  updateTotalPrice() {
    this.totalPrice = this.comSer.getTotalPrice();
  }

  // Hàm đặt giá trị mặc định nếu nhập giá trị = 0
  onQuantityChange(item: any) {
    if (item.quantity < 1) {
      item.quantity = 1; 
    }
    this.updateTotalPrice();
  }
}
