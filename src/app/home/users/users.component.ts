import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 //Person :
 public peopleList;
 public idPerson;
 public firstName;
 public lastName;
 public job;
 public email;
 public pwd;
 public departement;
  public ticketsWritten;

 constructor(public homeService:HomeApiService, public router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.homeService.getPerson().subscribe((data)=>{
      console.log(data)
      this.peopleList = data;  })
      
    }

    onEdit(id){
      this.router.navigate(['updateUser',id]);
    }

    onDelete(id){
      console.log('test',id);
      this.homeService.deletePerson(id).subscribe((value) => { console.log(value); });
      window.location.reload();
    }
   

  
}

