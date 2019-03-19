import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
//Routes of the sidebar

export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
 //   { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  //  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  //  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
 //   { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  //  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/books', title: 'Libros',  icon:'bookmarks', class: '' },
    { path: '/users', title: 'Usuarios',  icon:'person', class: '' },
 //   { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
import {LoginService} from '../../login/login.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  acceso:any;
  constructor(private service:LoginService) {

   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  validarCredenciales(elemento){
    if(elemento.path=='/books' && (this.service.funcionario==true||this.service.administrador==true)){
      return true;
    }
    if(elemento.path=='/users' && this.service.funcionario==true){
      return true;
    }
  }
}
