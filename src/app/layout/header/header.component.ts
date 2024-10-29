import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { ProductCartComponent } from '../../product/product-cart/product-cart.component';
import { Constants } from '../../shared/common/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public constant: Constants,
    private router: Router,
  ) {}

  startIndex = 0;
  products = [];
  searchModel: any = {
    pageSize: 10,
    totalItems: 0,
    pageNumber: 1,
    thuongHieu: 0,
    
  };

  ngOnInit(): void {}

  getProducts(type: any) {
    // this.router.navigate(["danh-sach/" + type]);
    window.location.href = "danh-sach/" + type;
  }

  openModalLogin() {
    let activeModal = this.modalService.open(LoginComponent, {
      container: 'body',
      windowClass: 'app-login',
      backdrop: 'static',
    });
    activeModal.result.then(
      (result) => {
        if (result) {
        }
      },
      (reason) => {}
    );
  }

  openModalCart() {
    let activeModal = this.modalService.open(ProductCartComponent, {
      container: 'body',
      windowClass: 'app-product-cart',
      backdrop: 'static',
    });
    activeModal.result.then(
      (result) => {
        if (result) {
        }
      },
      (reason) => {}
    );
  }
}
