import{Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { LoginService } from 'app/login/login.service';
@Injectable()
export class  UsersAutoGuard implements CanActivate{
  constructor(private _router : Router,private service:LoginService){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.service.getStateLoginUsers()==false){
        this._router.navigate(['/books']);
        console.log(this._router.url);
        return false;
    }else{
        return true;
    }
  }
}