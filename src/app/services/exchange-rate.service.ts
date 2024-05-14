import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private apiKey = 'f61553f12455acfd351e86c5';
  private apiUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest`;

  constructor(private http: HttpClient) { }

  getExchangeRates(baseCurrency: string, targetCurrencies: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${baseCurrency}?symbols=${targetCurrencies}`);
  }
}
