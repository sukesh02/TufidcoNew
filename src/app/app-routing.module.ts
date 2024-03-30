import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'funds', component: FundsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
