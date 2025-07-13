import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chantier-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './chantier-dashboard.html',
  styleUrl: './chantier-dashboard.scss'
})
export class ChantierDashboardComponent implements OnInit {
  chantierId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.chantierId = this.route.snapshot.paramMap.get('id') || '';
  }

  goBack() {
    this.router.navigate(['/chantiers']);
  }

  navigateToSection(section: string) {
    if (section === 'appro') {
      this.router.navigate(['/chantier', this.chantierId, 'appro']);
    } else {
      // Pour les autres sections, on peut afficher un message ou naviguer vers une page générique
      console.log(`Navigation vers la section: ${section}`);
    }
  }
}

