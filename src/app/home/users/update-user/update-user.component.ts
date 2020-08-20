import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../home-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(public homeService:HomeApiService, public router:Router,private route:ActivatedRoute) { }
public person;
public peopleList;
public idPerson;
public firstName;
public lastName;
public job;
public departement;
public email;
public password;
public ticketsWritten;
public ticketList;



  ngOnInit(): void {
    this.homeService.getPerson().subscribe((data)=>{
      console.log(data)
      this.ticketList = data;  })

    this.homeService.getPerson().subscribe((data)=>{
      console.log(data)
      this.peopleList = data;
  })
this.idPerson=this.route.snapshot.paramMap.get('id');
this.homeService.getPersonById(this.idPerson).subscribe((data)=>{
this.firstName = data['firstName'];
this.lastName = data['lastName'];
this.job = data['job'];
this.departement = data['departement'];
this.email = data['email'];
this.password = data['password'];
this.ticketsWritten = data['ticketsWritten'];
console.log(data);
console.log(this.firstName);
})
}



  selectChange(event:any){
    this.job=event.target.value;
    }
      submit()
      {
        let person = {
          idPerson:parseInt(this.idPerson),
          firstName:this.firstName,
          lastName:this.lastName,
          job:this.job,
          departement:this.departement,
          email:this.email,
          password:this.password,
          ticketsWritten:this.ticketsWritten,
        }
        this.homeService.putPerson(person.idPerson,person).subscribe((data)=>{
          console.log(data)
        })
        this.router.navigateByUrl('users').then(() => {
          window.location.reload();
        });
      }

}
