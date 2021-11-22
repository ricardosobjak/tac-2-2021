import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    IndexComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
