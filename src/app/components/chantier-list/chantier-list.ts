import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChantierService } from '../../services/chantier';
import { Chantier } from '../../models/chantier.model';

@Component({
  selector: 'app-chantier-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './chantier-list.html',
  styleUrl: './chantier-list.scss'
})
export class ChantierListComponent implements OnInit {
  chantiers: Chantier[] = [];
  filteredChantiers: Chantier[] = [];
  searchTerm: string = '';
  loading: boolean = true;

  constructor(
    private chantierService: ChantierService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadChantiers();
  }

  loadChantiers() {
    this.loading = true;
    this.chantierService.getChantiers().subscribe({
      next: (data) => {
        this.chantiers = data;
        this.filteredChantiers = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des chantiers:', error);
        this.loading = false;
      }
    });
  }

  filterChantiers() {
    if (!this.searchTerm) {
      this.filteredChantiers = this.chantiers;
    } else {
      this.filteredChantiers = this.chantiers.filter(chantier =>
        chantier.Affaire_Libelle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        chantier.Affaire_Code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  selectChantier(chantier: Chantier) {
    this.router.navigate(['/chantier', chantier.Affaire_Code]);
  }
}

