import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  constructor(public homeService:HomeApiService, public router:Router) { }
  public idTicket;
  public nameTicket;
  public stateTraitement;
  public stateValidation;
  public poste;
  public departementTicket;
  public competenceTechnique;
  public competenceFonctionnelle;
  public softSkills;
  public certification;
  public nombreAnnee;
  public motif="";
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

  public nvposte;

 // public inputValue = ;

  public motif1;
  public motif2;
  public motif3;
  
  ngOnInit(): void {
    this.homeService.getTickets().subscribe((data)=>{
      console.log(data)
      this.ticketsList = data;
    })
    console.log(this.motif1);
  }
 /* selectPoste(event:any){
    this.job=event.target.value;
    }*/

    submit()
    {
      let ticket = {
        nameTicket:this.nameTicket,
        stateTraitement:this.stateTraitement,
        stateValidation:this.stateValidation,
        poste:this.poste,
        departementTicket:this.departementTicket,
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
        ticketsList:this.ticketsList
      }

      if ((<HTMLInputElement>document.getElementById('idProject')).checked) {
        ticket.motif+="Projet ";
      }
      if(this.poste=="Nouveau"){
        ticket.poste=this.nvposte;
      }
      if ((<HTMLInputElement>document.getElementById('idOpportunity')).checked) {
        ticket.motif+="Opportunité ";
      }
      
      if ((<HTMLInputElement>document.getElementById('idStrategy')).checked) {
        ticket.motif+="Stratégique ";
      }
      console.log(ticket.confirmation); 
      console.log(ticket.budgetisation); 
      this.homeService.postTicket(ticket).subscribe((data)=>{
        console.log(data);
      })
      //this.router.navigateByUrl('users').then(() => {
       // window.location.reload(); })
    
}

}
