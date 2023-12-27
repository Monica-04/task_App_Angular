import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-scrum-project',
  templateUrl: './scrum-project.component.html',
  styleUrls: ['./scrum-project.component.css']
})
export class ScrumProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private projService:ProjectService) {
    this.projectForm = this.fb.group({
      name: '',
      key: '',
      description: ''
    });
  }

  onFormSubmit() {
    this.projService.addProject(this.projectForm.value).subscribe({
      next:(val:any)=>{
       alert("project addded sucessfullly")
      },
      error:(err:any)=>{
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }
}
