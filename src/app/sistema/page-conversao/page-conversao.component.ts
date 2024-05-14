import { Component, OnInit } from '@angular/core';
import { ExchangeService, ExchangeRate  } from '../../services/exchange.service';
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

  currencies!: string[]; 
  fromCurrency!: string; 
  toCurrency!: string; 
  amount!: number; 
  convertedAmount: number = 0;
  exchangeRate: ExchangeRate = {
    base: '',
    date: '',
    conversion_rates: {}
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
        this.domSanitizer.bypassSecurityTrustResourceUrl('')
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
            this.fromCurrency = 'BRL';
            this.toCurrency = 'USD';
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
      if (response && response.conversion_rates && response.conversion_rates[this.toCurrency]) {
        this.exchangeRate = response;
        this.convertedAmount = this.amount * this.exchangeRate.conversion_rates[this.toCurrency];
        this.isValueOver10000 = this.checkValueOver10000(this.toCurrency, this.convertedAmount);

         console.log(`Amount: ${this.amount}`);
         console.log(`Exchange Rate: ${this.exchangeRate.conversion_rates[this.toCurrency]}`);
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
      taxaConversao: this.exchangeRate.conversion_rates[this.toCurrency]
    };
  }
  
  handleError(error: any) {
    console.error(error);
    this.convertedAmount = 0;
    // Adicione aqui o código para mostrar a mensagem de erro ao usuário
  }
  
  clearForm() {
    this.amount = 0;
    this.convertedAmount = 0;
    this.isValueOver10000 = false; 
  }

  // Função para verificar se o valor convertido é maior que 10000 dólares
  checkValueOver10000(currency: string, amount: number) {
    if (amount > 10000) {
      return true;
    } else {
      return false;
    }
  }

}
