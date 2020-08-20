import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewTicketComponent } from './home/new-ticket/new-ticket.component';
import { ListTicketComponent } from './home/list-ticket/list-ticket.component';
import { MyTicketsComponent } from './home/my-tickets/my-tickets.component';
import {AngMaterialModule} from './ang-material/ang-material.module';
import { UsersComponent } from './home/users/users.component';
import { NewUserComponent } from './home/Users/new-user/new-user.component';
import { UpdateUserComponent } from './home/users/update-user/update-user.component';
import { CandidatureComponent } from './home/candidature/candidature.component';
import { UpdateCandidatureComponent } from './home/Candidature/update-candidature/update-candidature.component';
import { NewCandidatureComponent } from './home/new-candidature/new-candidature.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'newTicket', component : NewTicketComponent},
  {path : 'listTicket', component : ListTicketComponent},
  {path : 'myTickets', component : MyTicketsComponent},
  {path : 'users', component : UsersComponent},
  {path : 'newUser', component : NewUserComponent},
  {path : 'updateUser/:id', component : UpdateUserComponent},
  {path : 'candidatures', component : CandidatureComponent},
  {path : 'updateCandidature', component : UpdateCandidatureComponent},
  {path : 'newCandidature', component : NewCandidatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngMaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }