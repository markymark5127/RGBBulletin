import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolesComponent } from './consoles/consoles.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'consoles', component: ConsolesComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
