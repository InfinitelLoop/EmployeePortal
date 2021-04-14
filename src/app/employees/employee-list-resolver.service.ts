import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { map , catchError } from 'rxjs/operators';
import { ResolvedEmployeeList} from './resolved-employeeList.model';
import { EmployeeModule} from '../employees/employee.module';

@Injectable({
    // providedIn: 'any',
    providedIn: EmployeeModule,
})
export class EmployeeListResolverService implements Resolve<Employee[] | string>{
    constructor(private _employeeService: EmployeeService) {
        console.log("I am a resolver constructor- list resolver-service activated");
    }
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Employee[] | string> {
            console.log("I am a resolver", this._employeeService.getEmployees());
            return this._employeeService.getEmployees()
        .pipe(
            // map((employeelist) => new ResolvedEmployeeList(employeelist)),
            catchError((err: string ) => { 
                return (console.log(err), 
                of(err));
            })

            
        );
    } 

}