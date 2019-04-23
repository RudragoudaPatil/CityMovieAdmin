import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditmovieComponent } from './editmovie/editmovie.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'movie',
    component:MovieComponent
  },{
    path:'addmovie',
    component:AddmovieComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'edit/:id',
    component:EditmovieComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
