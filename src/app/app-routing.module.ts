import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ListEmployeesComponent } from './employees/list-employees.component';
// import { CreateEmployeeComponent } from './employees/create-employee.component';
// import { CreateEmployeeCanDeactivateGaurdService } from './employees/create-employee-can-deactivate.service';
// import { EmployeeDetailsComponent } from './employees/employee-details.component';
// import {EmployeeListResolverService} from './employees/employee-list-resolver.service';
import {PageNotFoundComponent} from './page-not-found.component'
// import {EmployeeDetailsGuardService} from './employees/employee-details-guard-service';
// import { EmployeeModule } from './employees/employee.module';
const routes: Routes = [
  // {
  //   path: 'list',
  //   component: ListEmployeesComponent,
  //   resolve: {employeeList: EmployeeListResolverService}
  // },
  // {
  //   path: 'edit/:id',
  //   component: CreateEmployeeComponent,
  //   canDeactivate: [CreateEmployeeCanDeactivateGaurdService]
  // },
  // { path: 'employees/:id', component: EmployeeDetailsComponent, 
  //   canActivate : [EmployeeDetailsGuardService]
  // },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'employees' , loadChildren: () => import('./employees/employee.module').then(m => m.EmployeeModule)
  // './employees/employee.module#EmployeeModule' 
},

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
