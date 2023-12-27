import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/modules/module';
import { ProjectService } from 'src/app/project.service';


@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  
  projectData:Project[] = []
  constructor(private projService:ProjectService ) { }

  getProjectList(){
    this.projService.getProject().subscribe({
      next:(res)=>{
        this.projectData = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getProjectList();
  }}