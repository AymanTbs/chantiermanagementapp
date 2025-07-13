import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApproService } from '../../services/appro';
import { ApproDocument } from '../../models/chantier.model';

@Component({
  selector: 'app-appro-section',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './appro-section.html',
  styleUrl: './appro-section.scss'
})
export class ApproSectionComponent implements OnInit {
  chantierId: string = '';
  documents: ApproDocument[] = [];
  loading: boolean = true;
  displayedColumns: string[] = ['document', 'percentage', 'date', 'status'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private approService: ApproService
  ) {}

  ngOnInit() {
    this.chantierId = this.route.snapshot.paramMap.get('id') || '';
    this.loadApproData();
  }

  loadApproData() {
    this.loading = true;
    this.approService.getApproDocuments(this.chantierId).subscribe({
      next: (data) => {
        this.documents = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des données Appro:', error);
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/chantier', this.chantierId]);
  }

  refreshData() {
    this.loadApproData();
  }

  selectDocument(document: ApproDocument) {
    console.log('Document sélectionné:', document);
    // Ici on pourrait naviguer vers une page de détail du document
  }

  addDocument() {
    console.log('Ajouter un nouveau document');
    // Ici on pourrait ouvrir un dialog ou naviguer vers une page d'ajout
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  }

  getStatusClass(percentage: number): string {
    if (percentage === 0) return 'status-0';
    if (percentage === 100) return 'status-100';
    return 'status-partial';
  }

  getStatusColor(valide: number): 'primary' | 'accent' | 'warn' {
    return valide === 1 ? 'primary' : 'warn';
  }

  getStatusText(valide: number): string {
    return valide === 1 ? 'Validé' : 'En attente';
  }
}

