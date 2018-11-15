import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/general/home/home.component';
import { RoomsComponent } from './components/general/rooms/rooms.component';
import { ReservationComponent } from './components/general/reservation/reservation.component';
import { EmpMainComponent } from './components/employee/emp-main/emp-main.component';
import { ProcessReservationsComponent } from './components/manager/process-reservations/process-reservations.component';
import { EmpConciergeComponent } from './components/employee/emp-concierge/emp-concierge.component';
import { ManMainComponent } from './components/manager/man-main/man-main.component';
import { ManConciergeComponent } from './components/manager/man-concierge/man-concierge.component';
import { RoomOrderComponent } from './components/general/room-order/room-order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'reservation/rooms',
        component: RoomsComponent
      },
      {
        path: 'reservation/order',
        component: RoomOrderComponent
      }
    ]
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'employee',
    component: EmpMainComponent,
    children: [
      {
        path: 'employee/reservations',
        component: ProcessReservationsComponent
      },
      {
        path: 'employee/concierge',
        component: EmpConciergeComponent
      }
    ]
  },
  {
    path: 'manager',
    component: ManMainComponent,
    children: [
      {
        path: 'manager/concierge',
        component: ManConciergeComponent
      },
      {
        path: 'manager/reservations',
        component: ProcessReservationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
