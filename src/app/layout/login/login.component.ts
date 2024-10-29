import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../service/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(
    private activeModal: NgbActiveModal,
    private jwtHelper: JwtHelperService,
    private service: LayoutService,
    private router: Router
  ) {}

  model: any = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
    
  }

  login() {
    this.service.login(this.model)
      .subscribe(
        result => {
          if (result.isStatus) {
            result.data.LoginDate = new Date();
            localStorage.setItem('CurrentUser', JSON.stringify(result.data));
            localStorage.setItem("jwt", result.data.token);
            localStorage.setItem("refreshToken", result.data.refreshToken);
            this.router.navigate(['']);
          }
        },
        error => {
          // this.messageService.showError(error);
          this.model.password = null;
        }
      );
  }

  closeModal() {
    this.activeModal.close();
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('access_token');
    return this.jwtHelper.isTokenExpired(token);  // Returns true if expired
  }

  getTokenPayload(): any {
    const token = localStorage.getItem('access_token');
    if (!token) return null;
    return this.jwtHelper.decodeToken(token);  // Decodes and returns payload
  }
}
