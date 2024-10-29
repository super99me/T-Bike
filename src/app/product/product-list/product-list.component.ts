import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../service/product.service';
import { Constants } from '../../shared/common/constants';
import { CommonService } from '../../shared/service/common.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule, NgbModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ProductService,
    private route: ActivatedRoute,
    public constant: Constants,
    public comSer: CommonService,
  ) {}

  searchModel: any;
  products: any[] = [];
  brands: any[] = [];
  type: any;

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.comSer.loadBreadcrumb(this.type);
    this.initModelSearch();
    this.getAllBrand();
    this.search();
  }

  initModelSearch() {
    this.searchModel = {
      pageSize: 10,
      totalItems: 0,
      pageNumber: 1,
      // dateFrom: null,
      // dateTo: null,
      orderBy: '',
      orderType: '',
      name: '',
      type: '',
    };
  }

  clickOrderBy(orderBy: any) {
    this.searchModel.orderBy = orderBy;
    if (this.searchModel.orderType == 'ASC') {
      this.searchModel.orderType = 'DESC';
    } else {
      this.searchModel.orderType = 'ASC';
    }
    this.search();
  }

  search() {
    this.products = [
      {
        id: 1,
        name: 'Xe Đạp Địa Hình MTB',
        price: 4990000,
        originalPrice: 5500000,
        discount: 10,
        image: 'assets/image_temp/thethao/thethao1.jpg',
      },
      {
        id: 2,
        name: 'Xe Đạp Đua Road Bike',
        price: 8900000,
        originalPrice: 9900000,
        discount: 15,
        image: 'assets/image_temp/thethao/thethao2.jpg',
      },
      {
        id: 3,
        name: 'Xe Đạp Touring',
        price: 5900000,
        image: 'assets/image_temp/thethao/thethao3.jpg',
      },
      {
        id: 4,
        name: 'Xe Đạp Trẻ Em',
        price: 1200000,
        image: 'assets/image_temp/thethao/thethao4.jpg',
      },
      {
        id: 5,
        name: 'Xe Đạp Địa Hình MTB',
        price: 4990000,
        originalPrice: 5500000,
        discount: 10,
        image: 'assets/image_temp/thethao/thethao5.jpg',
      },
      {
        id: 6,
        name: 'Xe Đạp Đua Road Bike',
        price: 8900000,
        originalPrice: 9900000,
        discount: 15,
        image: 'assets/image_temp/thethao/thethao6.jpg',
      },
      {
        id: 7,
        name: 'Xe Đạp Touring',
        price: 5900000,
        image: 'assets/image_temp/thethao/thethao7.jpg',
      },
      {
        id: 8,
        name: 'Xe Đạp Trẻ Em',
        price: 1200000,
        image: 'assets/image_temp/thethao/thethao8.jpg',
      },
    ];

    // this.route.paramMap.subscribe(params => {
    //   this.searchModel.type = params.get('type') ?? this.constant.TypeProduct.TreEm;
    // });

    // this.service.searchProduct(this.searchModel).subscribe(
    //   (data: any) => {
    //     if (data.isStatus) {
    //       this.products = data.data.dataResults;
    //       this.searchModel.totalItems = data.data.totalItems;
    //     }
    //   },
    //   (error) => {
    //     this.messageService.showError(error);
    //   }
    // );
  }

  getAllBrand() {
    // this.service.getAllBrands().subscribe(
    //   (data: any) => {
    //     if (data.isStatus) {
    //       this.brands = data.data.dataResults;
    //     }
    //   },
    //   (error) => {
    //     this.messageService.showError(error);
    //   }
    // );

    this.brands = [
      { name: 'Giant', logo: 'assets/logos/giant.png' },
      { name: 'Twitter', logo: 'assets/logos/twitter.png' },
      { name: 'Java', logo: 'assets/logos/java.png' },
      { name: 'Sava', logo: 'assets/logos/sava.png' },
      { name: 'RoyalBaby', logo: 'assets/logos/royalbaby.png' },
      { name: 'Funky', logo: 'assets/logos/funky.png' },
    ];
  }

  // detail(id: any) {
  //   this.router.navigate([this.type + '/xem-chi-tiet/' + id]);
  // }

  sizes = ['20 Inch', '24 Inch', '26 Inch', '28 Inch'];
  filters = { minPrice: 0, maxPrice: 0, size: '' };
  filteredProducts = [...this.products];

  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const withinPriceRange =
        (!this.filters.minPrice || product.price >= this.filters.minPrice) &&
        (!this.filters.maxPrice || product.price <= this.filters.maxPrice);
      return withinPriceRange;
    });
  }

  currentPage = 1;
  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  itemsPerPage = 0;
  totalItems = 0;
  updatePaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    // this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
}
