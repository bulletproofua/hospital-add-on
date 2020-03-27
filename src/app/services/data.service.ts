import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

// Model
import { StoreData } from '../models/store-data.model';

import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
@Injectable()
export class DataService {
    constructor (
        private http: HttpClient,
        private storage: AngularFireStorage
    ) {}

    getDataFromFile(): Observable<StoreData | HttpErrorResponse> {

        let ref = this.storage.ref("UDRG_TRA-v-3.0.json").getDownloadURL();
        return ref.pipe(
            switchMap((URL: string) => {
                return this.http.get<StoreData | HttpErrorResponse>(URL, {});
            })
        )
    }
}