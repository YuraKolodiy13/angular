import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: { title: 'Home' }
}, {
  path: 'login',
  component: LoginComponent,
  data: { title: 'Login' }
}, {
  path: 'register',
  component: RegisterComponent,
  data: { title: 'Register' }
}, {
    path: '**',
    component: NotFoundComponent,
  data: { title: '404' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

