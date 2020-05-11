import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

import {FormsModule,FormBuilder,FormGroup,Validators,AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {


  emp:Employee;     
  name:string;
  location:string;
  email:string;
  mobile:string;
  eform:FormGroup;
  employees:Employee[];
  count:number;
  displayData:boolean = false;
  constructor(private service:EmployeeService, private fb:FormBuilder,private router: Router) { }

  ngOnInit() {
    

    
    this.eform = this.fb.group({
      ename : [''],
      eemail : [''],
      emobile : [''],
      elocation : ['']
      
    })
    this.service.getEmployee().subscribe(data=>{
      this.emp = data;
       this.displayData = true;
      console.log(this.emp);
  
    })

    
  }
  

  

  
  update()
  {
    
      
    this.service.updateEmployee(this.emp).subscribe();


    this.router.navigate(["employees"]);
  }

}








  
  
   
  

  
  
