import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './shared/service/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContentLayoutComponent,
    children: content
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
