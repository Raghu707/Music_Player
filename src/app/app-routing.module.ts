import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/homePage/homePage.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/music', pathMatch: 'full' },
      
      {
        path: 'about',
        loadChildren: () => import('./music/music.module').then(m => m.AboutModule)
      },
      
    ]
  },
  
];
