import { Routes } from '@angular/router';
import {BooksComponent} from '../../books/books.component';
import {UsersComponent} from '../../users/users.component';
import { LoginComponent } from '../../login/login.component';
import { AutoGuard } from './autoguard.component';
import { UsersAutoGuard } from './users.autoguard.component';
import { AdminLayoutComponent } from './admin-layout.component';
export const AdminLayoutRoutes: Routes = [
      { path: 'books', component: BooksComponent},//, canActivate: [AutoGuard] },
      { path: 'users', component: UsersComponent},//, canActivate: [UsersAutoGuard] },
      { path: 'login', component: LoginComponent}
]
