import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TemplateModule } from './template/template.module';
import { SistemaModule } from './sistema/sistema.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { ExchangeRateService } from './services/exchange-rate.service';
import { ExchangeService } from './services/exchange.service';
import { HistoricoService } from './services/historico.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    SistemaModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ExchangeRateService,
    ExchangeService,
    HistoricoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
