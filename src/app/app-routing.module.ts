import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/about', pathMatch: 'full' },
      
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      
    ]
  },
  
];
