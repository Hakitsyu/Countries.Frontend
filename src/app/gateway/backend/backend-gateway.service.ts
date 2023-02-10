import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TraceRouteCommand } from 'src/app/core/command';
import { RouteDto } from 'src/app/core/dto';
import { Country } from 'src/app/core/entities';

export class BackendGatewayService {
    constructor(private httpClient: HttpClient,
        private options: BackendGatewayOptions) {}

    getCountries(): Observable<Country[]> {
        const url = `${this.options.url}/countries/all`;
        return this.httpClient.get<Country[]>(url)
    }

    traceRoute(command: TraceRouteCommand): Observable<RouteDto> {
        const url = `${this.options.url}/countries/trace-route`;
        return this.httpClient.post<RouteDto>(url, command);
    }
}

export type BackendGatewayOptions = {
    url: string
}