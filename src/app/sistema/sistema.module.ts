import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeService } from '../services/exchange.service';
import { HistoricoService } from '../services/historico.service';
import { MoedasService } from '../services/moedas.service';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageConversaoComponent } from './page-conversao/page-conversao.component';
import { PageHistoricoComponent } from './page-historico/page-historico.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PageMoedasComponent } from './page-moedas/page-moedas.component';
import { FormsModule } from '@angular/forms';
// Importe os módulos do Angular Material necessários aqui
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageConversaoComponent,
    PageHistoricoComponent,
    PageSobreComponent,
    PageMoedasComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    SistemaRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
    ExchangeService,
    HistoricoService,
    MoedasService
  ]
})
export class SistemaModule {}
