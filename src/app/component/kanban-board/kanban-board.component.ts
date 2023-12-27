// kanban-board.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/modules/module';
import { ProjectService } from 'src/app/project.service';
import { Ticket } from 'src/app/modules/ticket';
import {CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
})
export class KanbanBoardComponent implements OnInit {
  projectName: string = '';
  projectTickets: Ticket[] = [];

  constructor(private route: ActivatedRoute,private projService:ProjectService) {}
  getTicketsForProject(projectName:string){
    this.projService.getTicketByProject(projectName).subscribe({
      next:(tickets)=>{
        console.log(`Tickets for ${projectName}:`,tickets);
        this.projectTickets=tickets;
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }
  onDrop(event: CdkDragDrop<Ticket[]>) {
    const { container, previousContainer, item } = event;
  
    
    if (previousContainer && previousContainer.data && container && container.data) {
      console.log('container data',container.data)

      if (previousContainer === container) {
       
        moveItemInArray(container.data, event.previousIndex, event.currentIndex);
      } else {
       
        transferArrayItem(
          previousContainer.data,
          container.data,
          event.previousIndex,
          event.currentIndex
        );
  
      
        const movedTicket = item.data as Ticket;
        console.log(movedTicket)
        
        switch (container.id) {
          case 'todo-lane':
            movedTicket.status = 'To-Do';
            break;
          case 'inProgress-lane':
            movedTicket.status = 'In-Progress';
            break;
          case 'done-lane':
            movedTicket.status = 'Done';
            break;
         
        }
  
        this.projService.updateTicketStatus(movedTicket);
      }
    }
  }
  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectName = params['projectName'];
     
      this.getTicketsForProject(this.projectName);
    });
  }
  
}
