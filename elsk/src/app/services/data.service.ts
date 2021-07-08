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

  postData(url: string, data: any){
      return this.http.post(this.baseUrl+url, data)
  }

  putData(url: string, id: string, data: any){
      return this.http.put(this.baseUrl+url+id, data)
  }

  deleteData(url: string, id: string){
      return this.http.delete(this.baseUrl+url+id)
  }


}
