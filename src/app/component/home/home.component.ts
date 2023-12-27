import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/modules/module';
import { ProjectService } from 'src/app/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projService: ProjectService, private router: Router) { }

  getList() {
    this.projService.getProject().subscribe((projects) => {
      this.projects = projects;
    });
  }

  getIconPath(icon: string): string {
    return `/assets/images/${icon}.png`;
  }

  navigateToBoard(project: Project) {
    this.router.navigate(['/board', project.name]);
  }

  ngOnInit(): void {
    this.getList();
  }
}
