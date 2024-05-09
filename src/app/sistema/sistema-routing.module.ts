import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageConversaoComponent } from './page-conversao/page-conversao.component';
import { PageHistoricoComponent } from './page-historico/page-historico.component';
import { PageMoedasComponent } from './page-moedas/page-moedas.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: LayoutComponent,
    children: [
      { path: 'page-home', component: PageHomeComponent },
      { path: 'page-conversao', component: PageConversaoComponent },
      { path: 'page-historico', component: PageHistoricoComponent },
      { path: 'page-moedas', component: PageMoedasComponent },
      { path: 'page-sobre', component: PageSobreComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaRoutingModule {}
