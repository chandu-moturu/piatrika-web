import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from '../our-services/our-services.component';
import { GoalComponent } from '../goal/goal.component';
import { Router, RouterLink, RouterOutlet, RouterLinkActive , NavigationEnd} from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,OurServicesComponent,GoalComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent  {
  constructor(private router: Router) {}


}
