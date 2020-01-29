import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'places',
    loadChildren: () => import('./pages/place-list/place-list.module').then( m => m.PlaceListPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'place/:id',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
