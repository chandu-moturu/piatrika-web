import { Component, OnInit,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { ExternalRouterComponent } from "../external-router/external-router.component";

@Component({
    selector: 'app-careers',
    standalone: true,
    providers: [JobsService],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.css',
    imports: [CommonModule, HttpClientModule, ExternalRouterComponent]
})
export class CareersComponent implements OnInit{
  activeStates: boolean[]=[];
  jobs:any[]=[];
  @Input() isActive: boolean = false;

  constructor(private job:JobsService){}
  ngOnInit(): void {
    this.job.getData().subscribe(
      data => {
        this.jobs = data;
        // console.log(this.jobs);
        this.activeStates = new Array(this.jobs.length).fill(false);
        // console.log("active state",this.activeStates)

      },
      error => {
        console.error('Error fetching data:', error);
      }
    );


  }

  activate(index: number){
    this.activeStates[index]=!this.activeStates[index]
    // console.log("active state",this.activeStates[index])


  }
}
