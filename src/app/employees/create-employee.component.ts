import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto = false;
  panelTitle: string;
  dateOFBirth: Date = new Date(2018, 0, 30);
  datePickerConfig: Partial<BsDatepickerConfig>;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'CSE' }

  ];
  employee: Employee;

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue'
      });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {

    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: '',
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,

      };
      this.panelTitle = 'Create Employee';
      //this.createEmployeeForm.reset();
    }
    else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployee(id).subscribe(
        (employee) => this.employee = employee,
        (err: any) => console.log(err)
      );
    }

  }

  saveEmployee(): void {

    // const newEmployee: Employee = Object.assign({}, this.employee);
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['employees']);
        },
        (error: any) => console.log(error)
      );
    } else{
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(['employees']);
        },
        (error: any) => console.log(error)
      );
    }

  }

}
