import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { Poliza } from "../models/polizas";
import { TipoPoliza } from "../models/tipo-polizas";

import { environment } from '../../environments/environment';

const API = environment.apiEndpoint;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class PolizaService {

  private URL_TIPO_POLIZAS : String = 'v1/tipo-polizas';
  private URL_POST_POLIZA : String = 'v1/poliza-seguro';
  private URL_POST_TIPO_POLIZA : String = 'v1/tipo-poliza';

  constructor(private httpClient: HttpClient) {}

  /**
   * Get Tipos polizas
   */
  getTipoPolizas() {
    return this.httpClient.get(API + this.URL_TIPO_POLIZAS);
  }

  /**
   * Add new poliza
   * @param poliza 
   */
  postPoliza(poliza: Poliza) {
    return this.httpClient.post<Poliza>(API + this.URL_POST_POLIZA, poliza, httpOptions);
  }

  /**
   * Add new poliza type
   * @param tipoPoliza 
   */
  postTipoPoliza(tipoPoliza: TipoPoliza) {
    return this.httpClient.post<TipoPoliza>(API + this.URL_POST_TIPO_POLIZA, tipoPoliza, httpOptions);
  }
}
