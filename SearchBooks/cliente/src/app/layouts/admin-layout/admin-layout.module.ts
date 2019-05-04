import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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
  MatDatepickerModule,
  MatDatepickerToggle,
  MatCheckboxModule,
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
    MatDialogModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],

  declarations: [
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