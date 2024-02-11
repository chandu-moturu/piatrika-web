import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { animateChild, query, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',

})


export class OurServicesComponent {

//   containerAnimation = trigger('container', [
//   transition(':enter, :leave', [
//     query('@', animateChild(), { optional: true }),
//   ])
// ]);
}
