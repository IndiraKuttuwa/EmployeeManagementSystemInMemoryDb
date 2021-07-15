import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';

import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';


const routes: Routes = [
  {path:'EMS', redirectTo: 'AppComponent', pathMatch: 'full'},
  { path:'employees', component: EmployeeslistComponent},
  { path: 'addEmployee',component:AddemployeeComponent },
  {path:'editEmployee',component:EditemployeeComponent},
  {path:'details',component:EmployeedetailsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: "reload", relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });

}










