import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
    id: number;
    name: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private apiUrl = 'http://127.0.0.1:8000/api/items/';

    constructor(private http: HttpClient) { }

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.apiUrl);
    }
}
