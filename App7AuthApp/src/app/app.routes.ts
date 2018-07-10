import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PrecioComponent },
  { path: 'protegida', component: ProtegidaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);