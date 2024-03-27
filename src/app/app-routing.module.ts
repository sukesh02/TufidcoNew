import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';

const routes: Routes = [
  { path : 'funds', component:FundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
