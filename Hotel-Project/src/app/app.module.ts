import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GenNavbarComponent } from './components/general/gen-navbar/gen-navbar.component';
import { EmpNavbarComponent } from './components/employee/emp-navbar/emp-navbar.component';
import { ManNavbarComponent } from './components/manager/man-navbar/man-navbar.component';
import { ReservationComponent } from './componets/general/reservation/reservation.component';
import { RoomsComponent } from './components/general/rooms/rooms.component';
import { ViewReservationsComponent } from './components/employee/view-reservations/view-reservations.component';
import { CheckCustomerComponent } from './components/employee/check-customer/check-customer.component';
import { CustInfoComponent } from './components/cust-info/cust-info.component';
import { CheckCustComponent } from './components/check-cust/check-cust.component';
import { ProcessReservationsComponent } from './components/manager/process-reservations/process-reservations.component';
import { ConciergeComponent } from './components/concierge/concierge.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { ManConciergeComponent } from './components/manager/man-concierge/man-concierge.component';
import { EmpConciergeComponent } from './components/employee/emp-concierge/emp-concierge.component';
import { EmpMainComponent } from './components/employee/emp-main/emp-main.component';
import { ManMainComponent } from './components/manager/man-main/man-main.component';
import { RoomOrderComponent } from './components/general/room-order/room-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenNavbarComponent,
    EmpNavbarComponent,
    ManNavbarComponent,
    ReservationComponent,
    RoomsComponent,
    ViewReservationsComponent,
    CheckCustomerComponent,
    CustInfoComponent,
    CheckCustComponent,
    ProcessReservationsComponent,
    ConciergeComponent,
    StaffLoginComponent,
    CustomerLoginComponent,
    ManConciergeComponent,
    EmpConciergeComponent,
    EmpMainComponent,
    ManMainComponent,
    RoomOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
