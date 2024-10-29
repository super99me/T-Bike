import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    throw new Error('Method not implemented.');
  }
  // accessToken: any;
  // user: any = null;

  // constructor(
  //   private router: Router,
  //   private jwtHelper: JwtHelperService,
  // ) {}

  // async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const token = localStorage.getItem('jwt');

  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }

  //   // const isRefreshSuccess = await this.tryRefreshingTokens(token);
  //   // if (!isRefreshSuccess) {
  //   //   this.router.navigate(['/auth/dang-nhap'], {
  //   //     queryParams: { returnUrl: state.url },
  //   //   });
  //   // }

  //   // return isRefreshSuccess;

  //   return true;
  // }
}
