import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from './layouts/homePage/homePage.component';

export const Approutes: Routes = [
  {
    path: '',
    component: homeComponent,
    children: [
      { path: '', redirectTo: '/music', pathMatch: 'full' },
      
      {
        path: 'music',
        loadChildren: () => import('./music/music.module').then(m => m.musicModule)
      },
      
    ]
  },
  
];
