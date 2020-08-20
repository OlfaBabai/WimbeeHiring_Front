import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {


  constructor(public homeService:HomeApiService, public router:Router) { }
 //Ticket :
  public ticketsList;
  public nameTicket;
  public stateTraitement;
  public stateValidation;
  public idWriter;
  

  ngOnInit(): void {
    this.homeService.getTickets().subscribe((data)=>{
      console.log(data)
      this.ticketsList = data;
     // let writer=this.homeService.getPerson(this.idWriter);
    })
    
  }

  submit()
  {
    let ticket = {
      NameTicket:this.nameTicket,
      StateTraitement:this.stateTraitement,
      StateValidation:this.stateValidation,
      IdWriter:this.idWriter
    }
    this.homeService.postTicket(ticket).subscribe((data)=>{
      console.log(data)
    })
    
  }

  onDelete(id){
    console.log('test',id);
    this.homeService.deleteTicket(id).subscribe((value) => { console.log(value); });
    window.location.reload();
  }

  ouvrirPage() {
    let ticket = {
      NameTicket:this.nameTicket,
      StateTraitement:this.stateTraitement,
      StateValidation:this.stateValidation,
      IdWriter:this.idWriter
    }
    this.router.navigate(["home", ticket])
  }

}
