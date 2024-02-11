import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-external-router',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './external-router.component.html',
  styleUrl: './external-router.component.css',
})
export class ExternalRouterComponent implements OnInit {
  adminPanelUrl!: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAdminPanelUrl().subscribe((data) => {
      this.adminPanelUrl = data.url;
      console.log(data)
    });
  }
}
