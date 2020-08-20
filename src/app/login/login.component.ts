import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home/home-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public homeService:HomeApiService, public router:Router ) {}
  public peopleList;
  public idPerson;
  public firstName;
  public lastName;
  public email;
  public pwd;
  public job;
  public ticketsWritten;
  ngOnInit(): void {
    this.homeService.getPerson().subscribe((data)=>{
      console.log(data)
      this.peopleList = data; })
  }

   userLogin()
   {
     
    let person 
     { 
       IdPerson:this.idPerson;
       FirstName:this.firstName;
       LastNale:this.lastName;
       Email:this.email;
       Password:this.pwd;
       Job:this.job;
       TicketsWritten:this.ticketsWritten;
      }
      person=this.homeService.login(person.Email,person.Password);
     /* if (person==null)
      {
        
      }
      else 
      {
        this.router.navigate(['home',person]);
      }*/

    /* this.peopleList.forEach(p => {
       if ((person.email==p.Email)&&(person.pwd==p.Password)) {
          this.router.navigate(['home',person]).then( (e) => {
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
       }
     });     */  
    }

   
}