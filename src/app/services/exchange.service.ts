import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ExchangeRate {
  base: string;
  date: string;
  conversion_rates: { [key: string]: number };
}

interface LatestApiResponse {
  base_code: string;
  target_code: string;
  conversion_rates: { [key: string]: number }; 
  documentasion: string; 
  result: string; 
  terms_of_use: string; 
  time_last_update_unix: number; 
  time_last_update_utc: string; 
  time_next_update_unix: number; 
  time_next_update_utc: string; 
}

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {

  private baseApiUrl = `https://v6.exchangerate-api.com/v6/f61553f12455acfd351e86c5`;

  constructor(private http: HttpClient) { }

  public getAllCurrencies(currencyBase: string ='BRL'): Observable<ExchangeRate> {
    const apiUrl = this.baseApiUrl + '/latest/' + currencyBase;
    return this.http.get<LatestApiResponse>(apiUrl).pipe(map((response: LatestApiResponse) => {
      const ret: ExchangeRate = {
        base: response.base_code,
        date: response.time_last_update_utc,
        conversion_rates: {}
      };
      return ret;
    }));
  }

  public getExchangeRate(fromCurrency: string, toCurrency: string): Observable<ExchangeRate> {
    const apiUrl = `${this.baseApiUrl}/pair/${fromCurrency}/${toCurrency}`;
    return this.http.get<LatestApiResponse>(apiUrl).pipe(map((response: LatestApiResponse) => {
      const retorno: ExchangeRate = {
        base: response.base_code,
        date: response.time_last_update_utc,
        conversion_rates: {}
      };
      return retorno;
    }));
  }
  
}
