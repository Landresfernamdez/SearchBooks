import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import {UsersComponent} from './users/users.component';
import { BooksService } from './books/books.service';
import { UsersService } from './users/users.service';
import { LoginService } from './login/login.service';
//Library to do request to the server
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookFilterPipe } from './books/book-filter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
import {
  AgmCoreModule
} from '@agm/core';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelect,
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
} from '@angular/material';
import { AppRoutes } from './layouts/admin-layout/app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule.forRoot(AppRoutes),
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
    MatOptionModule
  ],
  declarations: [
    AppComponent
    ,AdminLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
