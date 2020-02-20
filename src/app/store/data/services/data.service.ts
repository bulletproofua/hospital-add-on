import { Injectable } from '@angular/core';
import { DataModule } from '../data.module';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { HttpClient } from '@angular/common/http';

// Model
import { StoreData } from '../models/store-data.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor (private http: HttpClient) {}

    getDataFromFile(): Observable<StoreData> {
        console.log("-------")
        return this.http.get<string>('assets/data/UDRG_TRA-v-3.0.json').pipe(
            map((data: any) => {
                console.log("data", data);
                return data;
            })
        );
    }
}