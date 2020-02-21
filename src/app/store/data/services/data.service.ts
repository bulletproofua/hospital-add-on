import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs";

// Model
import { StoreData } from '../models/store-data.model';

@Injectable()
export class DataService {
    constructor (private http: HttpClient) {}

    getDataFromFile(): Observable<StoreData | HttpErrorResponse> {
        return this.http.get<StoreData | HttpErrorResponse>('assets/data/UDRG_TRA-v-3.0.json');
    }
}