import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-candidature',
  templateUrl: './new-candidature.component.html',
  styleUrls: ['./new-candidature.component.css']
})
export class NewCandidatureComponent implements OnInit {
  public candidatures;
  public candidature;
  public idCandidature;
  public prenomCandidat;
  public nomCandidat;
  public etatCandidature;
  public cV;
  public idTicket;
  public demande;
  public ticketlist;
  
  constructor(public homeService:HomeApiService, public router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.homeService.getTickets().subscribe((data)=>{
      console.log(data);
      this.ticketlist = data;
    })

      this.homeService.getCandidature().subscribe((data)=>{
        console.log(data);
        this.candidatures=data;
      })
  }

  getDemande(){
    
  }

  submit(){
    let candidature = {
      IdCandidature:this.idCandidature,
      PrenomCandidat:this.prenomCandidat,
      NomCandidat:this.nomCandidat,
      CV:this.cV,
      EtatCandidature:this.etatCandidature,
      IdTicket:this.idTicket,
      Demande:this.demande,
    }
    this.homeService.postCandidature(candidature).subscribe((data)=>{
      console.log(data)
    })
    this.router.navigateByUrl('candidatures').then(() => {
      window.location.reload();
    });
    alert("khedmet ya madame");
  }
}
