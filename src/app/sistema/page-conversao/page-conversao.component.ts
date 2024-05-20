import { Component, OnInit } from '@angular/core';
import { ExchangeService, ExchangeRate, ExchangeRates  } from '../../services/exchange.service';
import { HistoricoService } from '../../services/historico.service';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface Conversao {
  data: Date;
  moedaOrigem: string;
  valorEntrada: number;
  moedaDestino: string;
  valorSaida: number;
  taxaConversao: number;
}

@Component({
  selector: 'app-page-conversao',
  templateUrl: './page-conversao.component.html',
  styleUrl: './page-conversao.component.css'
})
export class PageConversaoComponent implements OnInit {

  currencies: string[] = []; 
  fromCurrency: string = 'BRL'; 
  toCurrency: string = 'USD'; 
  amount!: number; 
  convertedAmount: number = 0;
  exchangeRates: ExchangeRates = {
    base: '',
    date: '',
    conversion_rate: 0
  };
  isValueOver10000: boolean = false;

  constructor(
    private ExchangeService: ExchangeService,
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
    this.getCurrencies();
  }

  getCurrencies() {
    this.ExchangeService.getAllCurrencies()
      .subscribe({
        next: (response) => {
          if (response.conversion_rates) {
            this.currencies = Object.keys(response.conversion_rates);
          } else {
            console.error('conversion_rates não encontrado na resposta');
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  convertCurrency() {
  if (this.amount && this.fromCurrency && this.toCurrency) {
    this.ExchangeService.getExchangeRate(this.fromCurrency, this.toCurrency)
.subscribe({
  next: (response) => {
    console.log(response);
    if (response && response.conversion_rate) {
      this.exchangeRates = response;
      this.convertedAmount = this.amount * this.exchangeRates.conversion_rate;
      this.isValueOver10000 = this.checkValueOver10000(this.toCurrency, this.convertedAmount);

       console.log(`Amount: ${this.amount}`);
       console.log(`Exchange Rate: ${this.exchangeRates.conversion_rate}`);
       console.log(`Converted Amount: ${this.convertedAmount}`);

      const conversao = this.createConversaoObject();
      this.historicoService.adicionarConversao(conversao);
    } else {
      this.handleError("Invalid API response or missing exchange rate data.");
    }
  },
  error: (error) => {
    console.error(error);
  }
});
  } else {
    this.convertedAmount = 0;
  }
}
  
  createConversaoObject(): Conversao {
    return {
      data: new Date(),
      moedaOrigem: this.fromCurrency,
      valorEntrada: this.amount,
      moedaDestino: this.toCurrency,
      valorSaida: this.convertedAmount,
      taxaConversao: this.exchangeRates.conversion_rate
    };
  }
  
  handleError(error: any) {
    console.error(error);
    this.convertedAmount = 0;
  }
  
  clearForm() {
    this.amount = 0;
    this.convertedAmount = 0;
    this.isValueOver10000 = false; 
  }

  // Função para verificar se o valor convertido é maior que 10000 dólares
  checkValueOver10000(currency: string, amount: number) {
    if (amount > 1000) {
      return true;
    } else {
      return false;
    }
  }

}
