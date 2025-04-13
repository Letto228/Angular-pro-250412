import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my',
    loadComponent: () => import('./shell-application/shell-application.component').then(m => m.ShellApplicationComponent),
  },
  {
    path: 'mf',
    loadChildren: () => import('micro-front/HelloModule').then(m => m.HelloModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
