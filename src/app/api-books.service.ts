import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const url = 'https://fakerestapi.azurewebsites.net/api/v1/Books';


@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(url);
  }

}
