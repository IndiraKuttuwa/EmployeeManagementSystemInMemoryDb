import { Component, OnInit } from '@angular/core';
import {FormsModule,FormBuilder,FormGroup,Validators,AbstractControl, FormControl} from '@angular/forms';
import {Employee} from '../Employee';

import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
  
})
export class AddemployeeComponent implements OnInit {

  newemp:Employee;
  id:number;
  name:string;
  location:string;
  email:string;
  mobile:string;
  
  pform:FormGroup;


  constructor(private service:EmployeeService,private router:Router, private fb:FormBuilder) {
 
  }

  ngOnInit(){
  
  this.pform = this.fb.group({
    fname : [''],
    femail : [''],
    fmobile : [''],
    flocation : ['']
    
  })
}

  

  
 

  

    
addEmployee(){

this.id=null;  
  
  this.newemp = new Employee(this.id,this.name,this.location,this.email,this.mobile);
 
  this.service.addEmployee(this.newemp).subscribe(data=>{
    this.newemp = data;
  })
  this.router.navigate(["employees"]);
     
}


}




  


 
 

  

