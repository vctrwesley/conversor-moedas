import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExchangeRate {
  base: string;
  date: string;
  conversion_rates: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {

  private valor = "BRL";
  private apiUrl = `https://v6.exchangerate-api.com/v6/f61553f12455acfd351e86c5/latest/${this.valor}`;

  constructor(private http: HttpClient) { }

 set setValor(valor: string) {
    this.valor = valor;
  }

  public getAllCurrencies(): Observable<ExchangeRate> {
    const params = new HttpParams().set('access_key', 'f61553f12455acfd351e86c5');
    return this.http.get<ExchangeRate>(this.apiUrl, { params });
  }

  public getExchangeRate(fromCurrency: string, toCurrency: string): Observable<ExchangeRate> {
    this.apiUrl = `https://v6.exchangerate-api.com/v6/f61553f12455acfd351e86c5/latest/${fromCurrency}`;
    const params = new HttpParams()
      .set('access_key', 'f61553f12455acfd351e86c5')
      .set('base', fromCurrency)
      .set('symbols', toCurrency);
    return this.http.get<ExchangeRate>(this.apiUrl, { params });
  }
  
}
