import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent, LoginComponent } from './components';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true, // <-- debugging purposes only
        enableTracing: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
