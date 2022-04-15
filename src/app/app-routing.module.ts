import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './views/author/author.component';
import { 
  AuthGuardService as AuthGuard 
} from './views/auth/auth/auth.guard'
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/auth/login/login.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AuthorComponent,
    canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     component: HomeComponent,
    //   },
    // ],
  },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
