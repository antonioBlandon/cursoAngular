import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

// Services
import { UserService } from './services/user.service';

// Components
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableMaterialAngularComponent } from './components/table-material-angular/table-material-angular.component';
import { TableMaterialAngular2Component } from './components/table-material-angular2/table-material-angular2.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableMaterialAngularComponent,
    TableMaterialAngular2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
