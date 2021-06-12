import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalanderComponent } from './calander/calander.component';
import { DetailByPinComponent } from './detail-by-pin/detail-by-pin.component';
import { DetailByStateComponent } from './detail-by-state/detail-by-state.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'pin' , component:DetailByPinComponent},
  {path: 'home' , component:HomeComponent},
  {path:'state' , component:DetailByStateComponent},
  {path: 'calander', component:CalanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
