import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../home-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(public homeService:HomeApiService, public router:Router) { }

public peopleList;
public idPerson;
public firstName;
public lastName;
public job;
public email;
public pwd;
public departement;
public ticketsWritten;


  ngOnInit(): void {
    this.homeService.getPerson().subscribe((data)=>{
      console.log(data)
      this.peopleList = data;
  })
}
selectJob(event:any){
this.job=event.target.value;
}
selectDepartement(event:any){
  this.departement=event.target.value;
  }
  submit()
  {
    let person = {
      IdPerson:this.idPerson,
      FirstName:this.firstName,
      LastName:this.lastName,
      Job:this.job,
      Email:this.email,
      Password:this.pwd,
      Departement:this.departement,
      TicketsWritten:this.ticketsWritten,
    }
    this.homeService.postPerson(person).subscribe((data)=>{
      console.log(data)
    })
    this.router.navigateByUrl('users').then(() => {
      window.location.reload();
    });
  }
}
