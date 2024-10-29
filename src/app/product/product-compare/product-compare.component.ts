import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../shared/service/common.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-compare',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-compare.component.html',
  styleUrl: './product-compare.component.scss'
})
export class ProductCompareComponent implements OnInit {

  type: any = '';
  products: any[] = [];
  availableProducts = [
    { id: 2, name: 'Xe Đạp Địa Hình Phoenix 27 Inch', price: 3000000, specifications: 'Khung nhôm, bánh 27 inch', image: 'assets/product1.jpg' },
    { id: 3, name: 'Xe Đạp Địa Hình MTB XTR 29 Inch', price: 3500000, specifications: 'Khung thép, bánh 29 inch', image: 'assets/product2.jpg' }
  ];
  filteredProducts = [...this.availableProducts];
  searchTerm: string = '';

  constructor(
    public comSer: CommonService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.comSer.loadBreadcrumb(this.type);
  }

  openProductSearchPopup(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  addProductToComparison(newProduct: any) {
    if (!this.products.some(product => product.id === newProduct.id)) {
      this.products.push(newProduct);
    } else {
      alert('Sản phẩm đã có trong danh sách so sánh.');
    }
  }

  removeProduct(product: any) {
    this.products = this.products.filter(p => p.id !== product.id);
  }

  filterProducts() {
    this.filteredProducts = this.availableProducts.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
