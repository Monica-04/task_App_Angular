export interface Ticket {
    id: string;
    projectName:string;
    title: string;
    description: string;
    type: string; 
    status: string; 
    priority: string; 
    reporter: string; 
    creationDate: Date;
    summary:string;
  }