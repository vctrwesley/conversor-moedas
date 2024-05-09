import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageConversaoComponent } from './page-conversao/page-conversao.component';
import { PageHistoricoComponent } from './page-historico/page-historico.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PageMoedasComponent } from './page-moedas/page-moedas.component';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageConversaoComponent,
    PageHistoricoComponent,
    PageSobreComponent,
    PageMoedasComponent,
  ],
  imports: [CommonModule, SistemaRoutingModule],
})
export class SistemaModule {}
