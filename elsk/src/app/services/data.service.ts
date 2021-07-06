import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.url

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(this.baseUrl+url);
  }


}
