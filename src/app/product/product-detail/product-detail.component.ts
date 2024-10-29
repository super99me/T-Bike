import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonService } from '../../shared/service/common.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public comSer: CommonService,
    private service: ProductService,
    private router: Router
  ) {}

  type: any = '';
  id: any;
  showFeatures = false;
  model: any = {
    id: '',
  }
  model1 = {
    id: 1,
    name: 'Xe Đạp Địa Hình Fascino FS126S 26 Inch',
    price: 2490000,
    oldPrice: 2690000,
    colors: ['Vàng', 'Xám', 'Đen'],
    image: 'assets/samsung-s24.jpg'
  };
  
  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.comSer.loadBreadcrumb(this.type);
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetailProduct();
  }

  toggleFeatures() {
    this.showFeatures = !this.showFeatures;
  }

  getDetailProduct() {
    this.service.getByProductId(this.id).subscribe(
      (result: any) => {
        this.model = result.data;
      }
    );
  }

  compareProduct(product: any) {
    this.router.navigate(['/so-sanh-san-pham'], { state: { product } });
  }

  navigateToComparison(product: any) {
    this.router.navigate([this.type + '/so-sanh-san-pham'], { state: { product } });
  }
}
