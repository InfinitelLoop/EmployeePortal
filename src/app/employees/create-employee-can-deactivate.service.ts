import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeModule} from '../employees/employee.module';

@Injectable({
    // providedIn: 'any',
    providedIn: EmployeeModule,


})
export class CreateEmployeeCanDeactivateGaurdService implements CanDeactivate<CreateEmployeeComponent> {
    canDeactivate(component: CreateEmployeeComponent)  : boolean {
        if(component.createEmployeeForm.dirty){
            console.log("create-employee-can-deactivate-service activated");

            return confirm('Are you sure you want to discard your changes?');

        }
        console.log("create-employee-can-deactivate-service activated");

        return true;
    }

}