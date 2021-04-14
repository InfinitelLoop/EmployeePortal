import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';

// import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
// import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
// import { EmployeeService } from './employees/employee.service';
// import {EmployeeListResolverService } from './employees/employee-list-resolver.service';
// import {EmployeeDetailsGuardService} from './employees/employee-details-guard-service';
// import { CreateEmployeeCanDeactivateGaurdService} from './employees/create-employee-can-deactivate.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { ListEmployeesComponent } from './employees/list-employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CreateEmployeeComponent } from './employees/create-employee.component';
//import { DisplayEmployeeComponent } from './employees/display-employee.component';
// import { EmployeeDetailsComponent } from './employees/employee-details.component';
// import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
// import { AccordianComponent } from './shared/accordian.component';
// import { RouterModule } from '@angular/router';
import { SharedModule} from './shared/shared.module';

// import { EmployeeModule } from './employees/employee.module';

@NgModule({
  declarations: [
    AppComponent, 
    // ListEmployeesComponent,
    // CreateEmployeeComponent,
    // SelectRequiredValidatorDirective,
    // ConfirmEqualValidatorDirective,
    //DisplayEmployeeComponent,
    // EmployeeDetailsComponent,
    // EmployeeFilterPipe,
    PageNotFoundComponent,
    // AccordianComponent
  ],
  imports: [
    BrowserModule,
    // EmployeeModule,
    AppRoutingModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    // FormsModule,
    // RouterModule,
    // ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    // enableProdMode()



  ],
  providers: [
    // EmployeeService,
    // CreateEmployeeCanDeactivateGaurdService,
    // EmployeeListResolverService,
    // EmployeeDetailsGuardService
  ],
  // enableProdMode();
  bootstrap: [AppComponent]
})
export class AppModule { }
