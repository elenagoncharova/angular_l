import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page2Component} from './pages/page2/page2.component';
import {Page1Component} from './pages/page1/page1.component';

const routes: Routes = [
  { path: 'cars', component: Page2Component },
  { path: '', component: Page1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
