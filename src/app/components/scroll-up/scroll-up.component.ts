import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.css'
})
export class ScrollUpComponent {
  showScroll : boolean = false;

  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.showScroll = window.scrollY>=560;
  }

  scrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

}
