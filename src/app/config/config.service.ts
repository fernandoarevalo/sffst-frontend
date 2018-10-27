import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
    apiUrl: string;
    tipoPolizasUrl: string;
    tipoPolizaUrl: string;
    polizaSeguroUrl: string;
}

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get(this.configUrl);
    }
}