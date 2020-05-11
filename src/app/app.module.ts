import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { EmployeeService } from './employee.service';
import { EmployeDataService } from './employe-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeslistComponent,
    EmployeedetailsComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(EmployeDataService)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


























