import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError , map } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeeService } from './employee.service';
import { EmployeeModule} from '../employees/employee.module';


@Injectable({
    // providedIn: 'root',
    providedIn: EmployeeModule,
})
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService, private _router: Router) {
        console.log("employee-details-guard-service activated");

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

         return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
            map(employee => {
                const employeeExists = !!employee;

                if (employeeExists) {
                    return true;
                }
                else {
                    this._router.navigate(['**']);
                    return false;
                }
            }),
            catchError((err) =>{
                console.log(err);
                return of(false);
            })
        );
    };

}