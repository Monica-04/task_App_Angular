import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.css']
})
export class ProjectTypeComponent implements OnInit {
  constructor(private router: Router) { }

  navigateToKanban() {
    this.router.navigate(['/kanban']);
  }

  ngOnInit(): void {
  }
  
  
}
