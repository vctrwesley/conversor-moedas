import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Conversao, HistoricoService } from '../../services/historico.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-historico',
  templateUrl: './page-historico.component.html',
  styleUrl: './page-historico.component.css'
})
export class PageHistoricoComponent {

  historico: Conversao[] = [];
  @ViewChild(MatTable) tabelaHistorico!: MatTable<any>;

  constructor(
    private historicoService: HistoricoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'high-value',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/imagem/valor.svg')
    );
  }

  ngOnInit() {
    this.historico = this.historicoService.obterHistorico();
  }

  limparHistorico() {
    this.historicoService.limparHistorico();
    this.historico = [];
    this.tabelaHistorico.renderRows();
  }

  isValueOver10000(currency: string, amount: number): boolean {
    return amount > 10000;
  }

}
