import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../home-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  constructor(public homeService:HomeApiService, public router:Router) { }
 public idTicket;
 public nameTicket;
 public stateTraitement;
 public stateValidation;
 public poste;
 public departement;
 public competenceTechnique;
 public competenceFonctionnelle;
 public softSkills;
 public certification;
 public nombreAnnee;
 public motif;
 public nameProjet;
 public nameClient;
 public dureeInterProjet;
 public chargeInterProjet;
 public lieuInterProjet;
 public confirmation;
 public nameOpportunite;
 public nomProspect;
 public dureeInterOpportunite;
 public chargeInterOpportunite;
 public lieuInterOpportunite;
 public probabilite;
 public description;
 public dateDebutSouhaite;
 public dateDebutPlutard;
 public urgence;
 public importance;
 public salaireBud;
 public packFinancierAnnuel;
 public budgetisation;
 public optionnel;
 public idWriter;
 public ticketsList;
  ngOnInit(): void {
    this.homeService.getTickets().subscribe((data)=>{
      console.log(data)
      this.ticketsList = data;
    })
  }
 /* selectPoste(event:any){
    this.job=event.target.value;
    }*/
  submit()
  {
    let ticket = {
      idTicket:this.idTicket,
      nameTicket:this.nameTicket,
      stateTraitement:this.stateTraitement,
      stateValidation:this.stateValidation,
      poste:this.poste,
      departement:this.departement,
      competenceTechnique:this.competenceTechnique,
      competenceFonctionnelle:this.competenceFonctionnelle,
      softSkills:this.softSkills,
      certification:this.certification,
      nombreAnne:this.nombreAnnee,
      motif:this.motif,
      nameProjet:this.nameProjet,
      nameClient:this.nameClient,
      dureeInterProjet:this.dureeInterProjet,
      chargeInterProjet:this.chargeInterProjet,
      lieuInterProjet:this.lieuInterProjet,
      confirmation:this.confirmation,
      nameOpportunite:this.nameOpportunite,
      nomProspect:this.nomProspect,
      dureeInterOpportunite:this.dureeInterOpportunite,
      chargeInterOppor:this.chargeInterOpportunite,
      lieuInterOpportunite:this.lieuInterOpportunite,
      probabilite:this.probabilite,
      description:this.description,
      dateDebutSouhaite:this.dateDebutSouhaite,
      dateDebutPlutard:this.dateDebutPlutard,
      urgence:this.urgence,
      importance:this.importance,
      salaireBud:this.salaireBud,
      packFinancierAnnuel:this.packFinancierAnnuel,
      budgetisation:this.budgetisation,
      optionnel:this.optionnel,
      idWriter:this.idWriter,
      ticketsList:this.ticketsList,
    }
    this.homeService.postTicket(ticket).subscribe((data)=>{
      console.log(data)
    })
    
  }
}
