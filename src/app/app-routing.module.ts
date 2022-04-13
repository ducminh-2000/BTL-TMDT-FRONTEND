import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './views/author/author.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: '',
    component: AuthorComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     component: AccountComponent,
    //   },
    //   {
    //     path: 'error/403',
    //     component: ErrorPageComponent,
    //     data: {
    //       type: 'error-v6',
    //       code: 403,
    //       title: '403... Access forbidden',
    //       desc: "Looks like you don't have permission to access for requested page.<br> Please, contact administrator",
    //     },
    //   },
    //   { path: 'error/:type', component: ErrorPageComponent },
    //   { path: '', redirectTo: 'account', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'account', pathMatch: 'full' },
    // ],
  },
  // { path: 'auth', component: LoginComponent },
  { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
