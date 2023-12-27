import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './modules/module';
import { Ticket } from './modules/ticket';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
   
  addProject(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/project',data)
  }
  getProject():Observable<any>{
    return this.http.get<Project[]>('http://localhost:3000/project')
  }
  addTicket(ticket: any): Observable<any> {
    return this.http.post<Ticket>('http://localhost:3000/ticket', ticket);
  }
  getTicketByProject(projectName:string):Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`http://localhost:3000/ticket?projectName=${projectName}`);
  }
  updateTicketStatus(ticket: Ticket): Observable<Ticket> {
    const updateUrl = `http://localhost:3000/ticket/${ticket.id}`;
    return this.http.put<Ticket>(updateUrl, { status: ticket.status });
  }
  
}
