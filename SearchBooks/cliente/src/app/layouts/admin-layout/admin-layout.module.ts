import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { BooksComponent } from '../../books/books.component';
import {UsersComponent} from '../../users/users.component';
import { BooksService } from '../../books/books.service';
import { UsersService } from '../../users/users.service';
import  {LoginService} from '../../login/login.service';
import {DialogContentExampleDialog} from '../../users/users.component'
//Library to do request to the server
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookFilterPipe } from '../../books/book-filter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatDialogModule,
} from '@angular/material';
import { LoginComponent } from 'app/login/login.component';
import { AutoGuard } from './autoguard.component';
import { UsersAutoGuard } from './users.autoguard.component';
import { AdminLayoutComponent } from './admin-layout.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatDialogModule
  ],

  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BooksComponent,
    UsersComponent,
    BookFilterPipe,
    LoginComponent,
    DialogContentExampleDialog
  ],
  providers: [BooksService,
  UsersService,LoginService,AutoGuard,UsersAutoGuard],
  bootstrap: [BooksComponent,UsersComponent],
  entryComponents: [UsersComponent, DialogContentExampleDialog],
})

export class AdminLayoutModule { }