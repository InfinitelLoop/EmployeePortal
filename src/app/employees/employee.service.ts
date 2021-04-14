import { Injectable } from '@angular/core';
import { Observable, throwError, pipe } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { delay } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { EmployeeModule} from '../employees/employee.module';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
// import { throwError } from "rxjs/observable/throw";

@Injectable({
  providedIn: EmployeeModule,
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
    console.log("I am in Employee service");
  }

  /* private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: new Date('10/25/1993'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/e1.jpg'

    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2323232323,
      dateOfBirth: new Date('11/3/1995'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/e3.jpg'

    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2323232525,
      dateOfBirth: new Date('3/25/1998'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/e2.jpg'
    }
  ]; */

  baseUrl = 'http://localhost:3000/employee';

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
    // return of(this.listEmployees).pipe(delay(2000));
  }

  getEmployee(id: number): Observable<Employee> {
    //return this.listEmployees.find(e => e.id === id);
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side Error:', errorResponse.error.message);
    }
    else {
      console.error('Server side Error:', errorResponse);
    }

    return throwError('This is a problem with the service. We are notified and working on it. Please try again later');

  }

  addEmployee(employee: Employee): Observable<Employee> {
    // const maxid = this.listEmployees.reduce(function (e1, e2) {
    //   return (e1.id > e2.id) ? e1 : e2;
    // }).id;
    // employee.id = maxid + 1;

    return this.httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));

    // else {
    //   const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
    //   this.listEmployees[foundIndex] = employee;
    // }

  }
  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));

  }

  deleteEmployee(id : number): Observable<void> {
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
    // const i = this.listEmployees.findIndex(e => e.id === id);
    // if (i !== -1) {
    //   this.listEmployees.splice(i, 1);
    // }

  }

}