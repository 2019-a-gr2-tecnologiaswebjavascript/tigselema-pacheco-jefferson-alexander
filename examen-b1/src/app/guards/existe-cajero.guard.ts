import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AutenticacionService} from "../service/autenticacion.service";

@Injectable()
export class ExisteCajeroGuard implements CanActivate{

  constructor(
    private readonly _router: Router,
    private readonly _autenticacionService: AutenticacionService
  ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this._autenticacionService.cajero)
    if(this._autenticacionService.cajero!=undefined){
        return true
      }else{
        this._router.navigate(['/inicio'])
        return false
      }
    }


}
