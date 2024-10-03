import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Depoimento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<Depoimento[]>;

  constructor(private httpClient: HttpClient) { }

  listar() : Observable<Depoimento[]> {
    if (!this.cache$) {
      this.cache$ = this.requestDepoimentos().pipe(
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  private requestDepoimentos(): Observable<Depoimento[]> {
    return this.httpClient.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }  
}
