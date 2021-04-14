import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeDetailsComponent } from '../employees/employee-details.component';
import { ListEmployeesComponent } from '../employees/list-employees.component';
import { CreateEmployeeComponent } from '../employees/create-employee.component';
import { DisplayEmployeeComponent } from '../employees/display-employee.component';
import { RouterModule } from '@angular/router';
//import { EmployeeService } from '../employees/employee.service';
// import { EmployeeFilterPipe } from '../employees/employee-filter.pipe';
//  import { AccordianComponent } from '../shared/accordian.component';
import { SharedModule} from '../shared/shared.module';
import { EmployeeRoutingModule }  from './employee-routing.module';
import { EmployeeService } from './employee.service';
// import { CreateEmployeeCanDeactivateGaurdService } from '../employees/create-employee-can-deactivate.service';
// import { EmployeeDetailsGuardService } from '../employees/employee-details-guard-service';
// import { EmployeeListResolverService } from '../employees/employee-list-resolver.service';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    DisplayEmployeeComponent
    //  AccordianComponent,
    // EmployeeFilterPipe
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BsDatepickerModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  exports: [
      ListEmployeesComponent,
      CreateEmployeeComponent,
       EmployeeDetailsComponent,
       DisplayEmployeeComponent,
      // SharedModule
     ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [EmployeeService],
})
export class EmployeeModule { }
