import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './pages/product/product.component';
import {ArticlesComponent} from './pages/articles/articles.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './pages/form/form.component';
import {PipeComponent} from './pages/pipe/pipe.component';
import {SwitchComponent} from './pages/switch/switch.component';
import {RoutingInComponent} from './pages/rout-my/routing-in.component';
import {InfoPageComponent} from './pages/rout-my/info-page/info-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'form', component: FormComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'routIn', component: RoutingInComponent },
  { path: 'routIn/:id', component: InfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
