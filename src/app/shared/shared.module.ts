import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 //import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//  import { EmployeeDetailsComponent } from '../employees/employee-details.component';
// //import { ListEmployeesComponent } from '../employees/list-employees.component';
// import { CreateEmployeeComponent } from '../employees/create-employee.component';
import { AccordianComponent } from '../shared/accordian.component';
// import { EmployeeService } from '../employees/employee.service';

// import {EmployeeListResolverService } from '../employees/employee-list-resolver.service';
// import {EmployeeDetailsGuardService} from '../employees/employee-details-guard-service';
import { EmployeeFilterPipe } from '../employees/employee-filter.pipe';
import { SelectRequiredValidatorDirective} from '../shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
// import { CreateEmployeeCanDeactivateGaurdService} from '../employees/create-employee-can-deactivate.service';


@NgModule({
  declarations: [
    //ListEmployeesComponent,
    // CreateEmployeeComponent,
    //  EmployeeDetailsComponent
    AccordianComponent,
    // EmployeeListResolverService,
    // EmployeeDetailsGuardService,
    EmployeeFilterPipe,
    // EmployeeService,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    // CreateEmployeeCanDeactivateGaurdService
  ],
  imports: [
    CommonModule,
    // EmployeeFilterPipe
  ],
  exports: [
    AccordianComponent,
    CommonModule,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    EmployeeFilterPipe,

    // EmployeeListResolverService,
    // EmployeeDetailsGuardService,
    // EmployeeService,
    // CreateEmployeeCanDeactivateGaurdService
  //   ListEmployeesComponent,
  //   CreateEmployeeComponent,
    //  EmployeeDetailsComponent
   ]
})
export class SharedModule { }
