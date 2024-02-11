import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router:Router){}
  date=new Date().getFullYear();
  }
