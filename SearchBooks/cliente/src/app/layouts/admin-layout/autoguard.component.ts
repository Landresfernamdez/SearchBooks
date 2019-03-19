import{Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { LoginService } from 'app/login/login.service';
@Injectable()
export class  AutoGuard implements CanActivate{
  constructor(private _router : Router,private service:LoginService){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.service.getStateLogin()==false){
        this._router.navigate(['/login']);
        return false;
    }else{
        return true;
    }
  }
}