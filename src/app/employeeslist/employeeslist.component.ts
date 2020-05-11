import { Component, OnInit, Input, OnChanges, } from '@angular/core';
import {Employee} from "../Employee";
import {FilterPipe} from "../filter.pipe";
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {

  title:String="Employees List";
  public count:number;
  new:Employee=null;
  search:string="";
  emp: Employee;
  employees:Employee[] ;
  

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {

  this.getEmployees();
  
  
  
  
    

  }
  getEmployees(){
    this.service.getEmployees().subscribe(data=>{
      this.employees = data;
      this.employees.sort((a,b)=>(a.id < b.id ? -1:1));
      this.count = this.employees.length;
    })
  }
  show(id:number){
    // this.service.display(id);
    this.service.getIDtobeRetrieved(id);
    
   }
   edit(id:number){
    //  this.service.edit(id);
   this.service.getIDtobeRetrieved(id);
   this.getEmployees();


   }
   delete(id:number){
    //  this.service.delete(id);
    this.service.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    });
   }
    
}





  

  

  
  
  











  

   
  
 
  
  

  
 

 
  // get Employees_updated():Employee[]{
   


  
  //   return this.employees;
  // }



