import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/index/ini',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages/index/ini'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
