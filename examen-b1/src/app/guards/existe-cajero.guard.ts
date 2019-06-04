import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";
;

@Injectable()
export class ExisteCajeroGuard implements CanActivate{

  constructor(
    private readonly _router: Router,
    private readonly _coockieService: CookieService
  ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cajero = this._coockieService.get('cajero')

      if(cajero){
        return true
      }else{
        this._router.navigate(['/inicio'])
        return false
      }
    }


}
