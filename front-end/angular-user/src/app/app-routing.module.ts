import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './public/index/index.component';
import { LoginComponent } from './public/login/login.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
