import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { RegisterFormComponent } from './components/login/register-form/register-form.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'
import { TestComponent } from './components/login/test/test.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])
const redirectLoggedInToMain = () => redirectLoggedInTo([''])

const routes: Routes = [
  { path: '', component: TestComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'login', component: LoginFormComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToMain } },
  { path: 'register', component: RegisterFormComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToMain } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
