import { Routes } from '@angular/router';
import { ChantierListComponent } from './components/chantier-list/chantier-list';
import { ChantierDashboardComponent } from './components/chantier-dashboard/chantier-dashboard';
import { ApproSectionComponent } from './components/appro-section/appro-section';

export const routes: Routes = [
  { path: '', redirectTo: '/chantiers', pathMatch: 'full' },
  { path: 'chantiers', component: ChantierListComponent },
  { path: 'chantier/:id', component: ChantierDashboardComponent },
  { path: 'chantier/:id/appro', component: ApproSectionComponent },
  { path: 'etats', component: ChantierListComponent }, // Temporaire
  { path: '**', redirectTo: '/chantiers' }
];

