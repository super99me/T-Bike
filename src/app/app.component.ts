import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IconHomeComponent } from './layout/icon-home/icon-home.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { ModalComponent } from './layout/modal/modal.component';
import { Constants } from './shared/common/constants';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    IconHomeComponent,
    ProductSearchComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    Constants, 
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
