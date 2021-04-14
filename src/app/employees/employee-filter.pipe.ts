import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';
//import { Injectable } from '@angular/core';

@Pipe({
    name: 'employeeFilter',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform {

    private counter = 0;


    transform(employees : Employee[], searchTerm: string) : Employee[] {

            this.counter++;
            console.log('Filter pipe executed count' + this.counter);

            if(!employees || !searchTerm){
                return employees;
            }

            
    }
}