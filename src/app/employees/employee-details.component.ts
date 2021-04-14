import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  totalEmployee: Employee[];

  constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { 

    }

  ngOnInit(): void {

    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this._employeeService.getEmployees().subscribe(
        (employees) => this.totalEmployee = employees,
        (err: any) => console.log(err)
      )
      this._employeeService.getEmployee(this._id).subscribe(
        (employee) => this.employee = employee,
        (err: any) => console.log(err)
      );
    });

  }
  viewNextEmployee() {
    // var curr_id = 
    if(this._id === this.totalEmployee[this.totalEmployee.length -1].id){
      this._id = this.totalEmployee[0].id;
    }
    else{
      let curr_index;
      for( curr_index = 0; curr_index < this.totalEmployee.length ; curr_index++ ){
        if(this._id === this.totalEmployee[curr_index].id){
          break
        }
      }
          this._id = this.totalEmployee[curr_index + 1].id;
    }


    // if (this._id < this.totalEmployee.length ) {
    //   this._id = this._id + 1;
    // } else {
    //   this._id = 1;
    // }
    this._router.navigate(['employees/employees', this._id], { queryParamsHandling: 'preserve' });
  }

}
