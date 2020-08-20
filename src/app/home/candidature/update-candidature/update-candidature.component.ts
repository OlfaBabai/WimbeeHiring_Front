import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../home-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-candidature',
  templateUrl: './update-candidature.component.html',
  styleUrls: ['./update-candidature.component.css']
})
export class UpdateCandidatureComponent implements OnInit {
// Candidature's properties
public candidatures;
public candidature;
public idCandidature;
public prenomCandidat;
public nomCandidat;
public etatCandidature;
public cV;
public idTicket;
public demande;
public ticketList;

constructor(public homeService:HomeApiService, public router:Router, public route:ActivatedRoute) { }

ngOnInit(): void {
  
    

  this.homeService.getCandidature().subscribe((data)=>{
    console.log(data)
    this.candidatures = data;
    this.idCandidature=this.route.snapshot.paramMap.get('id');
    this.homeService.getCandidatureById(this.idCandidature).subscribe((data)=>{
    this.prenomCandidat = data['prenomCandidat'];
    this.nomCandidat = data['nomCandidat'];
    this.etatCandidature = data['etatCandidature'];
    this.cV = data['cv'];
    this.idTicket = data['idTicket'];
    console.log(data);
});
});
}

submit(){
  let candidature = {
    idCandidature:parseInt(this.idCandidature),
    prenomCandidat:this.prenomCandidat,
    nomCandidat:this.nomCandidat,
    etatCandidature:this.etatCandidature,
    cv:this.cV,
    demande:null,
    idTicket:this.idTicket,
  }
  console.log(candidature);
  this.homeService.putCandidature(candidature.idCandidature,candidature).subscribe((data)=>{
    console.log(data)
  })
  this.router.navigateByUrl('candidatures').then(() => {
    console.log(candidature);
  });
}

}
