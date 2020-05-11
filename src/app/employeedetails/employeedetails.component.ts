import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  details:Employee;
  employee:Employee;
  id:number;
  apiUrl = 'api/employeedata';
  displayData: boolean = false;

  constructor(private router: Router,private route: ActivatedRoute, private location: Location,private service: EmployeeService) { }

  ngOnInit() {

    

    this.service.getEmployee().subscribe(data=>{
      this.details = data;
      this.displayData = true;
      console.log(this.details);
  
    })
    

  }

  

  btnClick=function()
  {
    this.router.navigateByUrl('employees');
  };

}








  

  


 

