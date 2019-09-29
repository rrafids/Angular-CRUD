import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri: string;

  constructor(private http: HttpClient) {
    this.uri = environment.uri;
  }

  getBusinesses() {
    console.log(`${this.uri}`);
    return this.http.get(`${this.uri}`);
  }

  deleteBusiness(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  detailsBusiness(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

}
