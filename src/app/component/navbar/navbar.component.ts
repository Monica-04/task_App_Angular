import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/modules/module';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/modules/ticket';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  projectData:Project[] = [];
  issueTypes: string[]=['Story','Task','Bug','Epic'];
  status: string[]=['To-Do','In-Progress','Done'];
  priority: string[]=['Low','Medium','High'];
  reporter: string[]=['Monica','John','Mark','Ross']
  ticket: Ticket = {
    id: '',
    projectName:'',
    title: '',
    description: '',
    type: '', 
    status: '', 
    priority: '', 
    reporter: '', 
    summary:'',
    creationDate: new Date(),
  };
  constructor(private router: Router,private http:HttpClient,private projService: ProjectService) { }

  navigateToProjectType() {
    this.router.navigate(['/type']);
  }
  navigateToViewProject() {
    this.router.navigate(['/view']);
  }
  openModal() {
    this.getProjectList();
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }
  
  closeModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
  getProjectList(){
    this.projService.getProject().subscribe({
      next:(res)=>{
        this.projectData = res;
        console.log(this.projectData);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  createTicket() {
    this.projService.addTicket(this.ticket).subscribe({
        next: (res) => {
            console.log('Ticket creation response:', res);
            alert('Ticket created successfully');
        },
        error: (err) => {
            console.log('Ticket creation error:', err);
        }
    });
}


  ngOnInit(): void {
    this.getProjectList();
  }
  
}
