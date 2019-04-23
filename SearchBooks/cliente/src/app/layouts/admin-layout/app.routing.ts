import { Routes } from '@angular/router';
import { BooksComponent } from '../../books/books.component';
import { UsersComponent } from '../../users/users.component';
import { LoginComponent } from '../../login/login.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { AppComponent } from 'app/app.component';
export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
]
