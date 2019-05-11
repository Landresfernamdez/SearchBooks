import { Routes } from '@angular/router';
import {UsersComponent} from '../../users/users.component';
import { AutoGuard } from './autoguard.component';
import { UsersAutoGuard } from './users.autoguard.component';
import { AdminLayoutComponent } from './admin-layout.component';
export const AdminLayoutRoutes: Routes = [
      { path: 'users', component: UsersComponent},//, canActivate: [UsersAutoGuard] },
]
