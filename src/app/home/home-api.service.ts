import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(public http: HttpClient) { }

// ----- Ticket's service -----

  getTickets() 
  {
    let headers = new HttpHeaders().append("accept","text/html")
    return this.http.get("https://localhost:5001/api/Ticket",{
      headers:headers
    })
  }

  postTicket(ticket)
  {
    return this.http.post("https://localhost:5001/api/Ticket/",ticket)
  }

  putTicket(id,tik)
  {
    return this.http.put("https://localhost:5001/api/Ticket/"+id,tik)
  }

  deleteTicket(id)
  {
    return this.http.delete("https://localhost:5001/api/Ticket/",id)
  }

  getTicketById(id)
{
  return this.http.get("https://localhost:5001/api/Ticket/"+id);
}

  // ----- Person's service -----

getPerson() 
{
  let headers = new HttpHeaders().append("accept","text/html")
  return this.http.get("https://localhost:5001/api/Person",{
    headers:headers
  })
}

postPerson(ticket)
{
  return this.http.post("https://localhost:5001/api/Person/",ticket)
}

putPerson(id,person)
{
  return this.http.put("https://localhost:5001/api/Person/"+id,person)
}

deletePerson(id)
{
  return this.http.delete("https://localhost:5001/api/Person/"+id)
}

getPersonById(id)
{
  return this.http.get("https://localhost:5001/api/Person/"+id);
}
// ----- login's service -----

login(email,pwd)
{
  let params = new HttpParams().set("email",email).set("pwd", pwd);
  return this.http.get("https://localhost:5001/api/login/", {params:params});
}

// ----- Candidature's service -----

getCandidature()
{
  let headers = new HttpHeaders().append("accept","text/html")
  return this.http.get("https://localhost:5001/api/Candidature",{
    headers:headers
  })
}

getCandidatureById(id)
{
  return this.http.get("https://localhost:5001/api/Candidature/"+id);
}

postCandidature(candidature)
  {
    return this.http.post("https://localhost:5001/api/Candidature/",candidature)
  }

  putCandidature(id,can)
  {
    return this.http.put("https://localhost:5001/api/Candidature/"+id,can)
  }

  deleteCandidature(id)
  {
    return this.http.delete("https://localhost:5001/api/Candidature/",id)
  }

}