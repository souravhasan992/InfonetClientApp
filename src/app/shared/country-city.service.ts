import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import * as countrycitystatejson from 'assets/countrycitystatejson.json';
@Injectable({
  providedIn: 'root',
})
export class CountryCityService {
  constructor(private http: HttpClient) {}
  url = 'assets/countrycitystatejson.json';

  getCountries() {
    return this.http.get<any>(this.url);
  }
}
