import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { ScrumProjectComponent } from './component/scrum-project/scrum-project.component';
import { ViewProjectsComponent } from './component/view-projects/view-projects.component';
import { FormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './component/kanban-board/kanban-board.component';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectTypeComponent,
    ScrumProjectComponent,
    ViewProjectsComponent,
    KanbanBoardComponent,
    HomeComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
