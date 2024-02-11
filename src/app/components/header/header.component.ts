import { Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, RouterLinkActive , NavigationEnd} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink, RouterLinkActive,MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isScrolled: boolean = false;
  isMenuVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY >0;
  }


}
