import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewTicketComponent } from './home/new-ticket/new-ticket.component';
import { ListTicketComponent } from './home/list-ticket/list-ticket.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : LoginComponent},
  {path : 'newTicket', component : NewTicketComponent},
  {path : 'listTicket', component : ListTicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
