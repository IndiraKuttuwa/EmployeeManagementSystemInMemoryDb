import { Injectable } from '@angular/core';
import {Employee} from './Employee';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {EmployeeslistComponent} from './employeeslist/employeeslist.component';

import {Observable, of, throwError, from} from 'rxjs';
import {tap,catchError, map} from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
        
  IDtobeedited:number;
  
  // chk= new Employee(4,"Amy","Hyderabad","amy@mail.com","9678983547");

  apiUrl = 'api/employeedata';
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  };
  constructor(private http: HttpClient) {
    

  }
  private handleError(error:any){
    console.error(error);
    return throwError(error);
  } 

  
   
    
  
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl).pipe(tap(data=> console.log(data)), catchError(this.handleError));
  }

  getEmployee():Observable<Employee>{  //fetch
    
    const url = `${this.apiUrl}/${this.IDtobeedited}`;
    return this.http.get<Employee>(url).pipe(catchError(this.handleError));
    
  }
  getIDtobeRetrieved(id:number){
    this.IDtobeedited = id;
  }

  addEmployee(emp :Employee):Observable<Employee>{

    emp.id= null;
    return this.http.post<Employee>(this.apiUrl,emp,this.httpOptions).pipe(tap(data=>console.log(data)),catchError(this.handleError));
  }

  updateEmployee(emp: Employee): Observable<Employee>{    //fetch,fetch
  const url = `${this.apiUrl}/${emp.id}`;
  console.log('From Service ' + emp.name);
  return this.http.put<Employee>(this.apiUrl,emp,this.httpOptions).pipe(  //fetch
    map(()=>emp),
    catchError(this.handleError)
    
  );
  }
  deleteEmployee(id: number):Observable<Employee>{          //fetch
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Employee>(url,this.httpOptions).pipe(catchError(this.handleError));    //fetch
  }








 
 
}











  
 

  
  







  
