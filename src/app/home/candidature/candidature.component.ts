import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
// Candidature's properties
  public candidatures;
  public idCandidature;
  public prenomCandidat;
  public nomCandidat;
  public etatCandidature;
  public cV;
  public idTicket;

  constructor(public homeService:HomeApiService, public router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.homeService.getCandidature().subscribe((data)=>{
      console.log(data)
      this.candidatures = data;
  });
}

onEdit(id){
  this.router.navigate(['updateCandidature',id]);
}

onDelete(id){
  console.log('test',id);
  this.homeService.deleteCandidature(id).subscribe((value) => { console.log(value); });
  window.location.reload();
}

}
