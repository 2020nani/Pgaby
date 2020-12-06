import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncomendasComponent } from './encomendas/encomendas.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produtos/produto.component';
import { ReceitasComponent } from './receita/receita.component';
import { ModalComponent } from './shared/components/modal/modal.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
 {
    path: 'home',
    component:HomeComponent
  },
   {
    path: 'encomendas',
    component: EncomendasComponent
  },
  {
    path: 'produtos',
    component: ProdutoComponent
  },
  {
    path: 'receitas',
    component: ReceitasComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  //se nao achar rota redireciona
 /*{
  path: '**',
  component: Erro404Component
  }*/
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
