import { Routes } from '@angular/router';
import { UsersComponent } from '../../users/users.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { AppComponent } from 'app/app.component';
export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'users',
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
