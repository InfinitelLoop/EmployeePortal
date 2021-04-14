import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './list-employees.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { CreateEmployeeCanDeactivateGaurdService } from '../employees/create-employee-can-deactivate.service';
import { EmployeeDetailsComponent } from './employee-details.component';
// import { DisplayEmployeeComponent } from '../employees/display-employee.component';

import { EmployeeListResolverService } from '../employees/employee-list-resolver.service';
// import {PageNotFoundComponent} from './page-not-found.component'
import { EmployeeDetailsGuardService } from '../employees/employee-details-guard-service';
// import { EmployeeModule } from './employees/employee.module';
const routes: Routes = [
    // {
        // path: 'employees', children: [
            {
                path: '',
                component: ListEmployeesComponent,
                resolve: { employeeList: EmployeeListResolverService }
            },
            {
                path: 'edit/:id',
                component: CreateEmployeeComponent,
                canDeactivate: [CreateEmployeeCanDeactivateGaurdService]
            },
            {
                path: 'employees/:id', component: EmployeeDetailsComponent,
                canActivate: [EmployeeDetailsGuardService]
            },
    //    ]
    // }

    //   { path: '', redirectTo: '/list', pathMatch: 'full' },
    //   { path: 'notfound', component: PageNotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
