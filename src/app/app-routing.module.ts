import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { ScrumProjectComponent } from './component/scrum-project/scrum-project.component';
import { ViewProjectsComponent } from './component/view-projects/view-projects.component';
import { KanbanBoardComponent } from './component/kanban-board/kanban-board.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
   {path: 'type', component: ProjectTypeComponent},
   {path: 'kanban', component: ScrumProjectComponent},
   {path: 'view', component: ViewProjectsComponent},
  {path: 'view', component: ViewProjectsComponent},
  {path: 'board/:projectName', component: KanbanBoardComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
