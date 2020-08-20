import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  constructor(public homeService:HomeApiService, public router:Router) { }
  public ticketsList;
  public nameTicket;
  public stateTraitement;
  public stateValidation;
  public idWriter;
  
  ngOnInit(): void {
    this.homeService.getTickets().subscribe((data)=>{
      console.log(data)
      this.ticketsList = data;
    })
  }

  onDelete(id){
    console.log('test',id);
    this.homeService.deleteTicket(id).subscribe((value) => { console.log(value); });
    window.location.reload();
  }

}
