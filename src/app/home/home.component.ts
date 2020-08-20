import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
public firstNameP="Manel";
public lastNameP="Jrad";
public namePerson=this.firstNameP+" "+this.lastNameP;
  ngOnInit(): void {
  }

}
