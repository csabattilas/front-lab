import { Route } from '@angular/router';
import { CustomLionDemoComponent } from './custom-lion-demo/custom-lion-demo.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./nx-welcome.component').then((m) => m.NxWelcomeComponent),
  },
  { path: 'custom-lion', component: CustomLionDemoComponent },
];
