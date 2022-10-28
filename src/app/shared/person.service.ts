import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person.model';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private personHttp: HttpClient) {}
  personUrl: string = 'https://localhost:44356/api/people';
  countryUrl: string = 'https://countriesnow.space/api/v0.1/countries/states';
  listPerson: Person[] = [];
  listCountry: any[] = [];
  personData: Person = new Person();
  savePerson() {
    return this.personHttp.post(this.personUrl, this.personData);
  }
  updatePerson() {
    return this.personHttp.put(
      `${this.personUrl}/${this.personData.personId}`,
      this.personData
    );
  }
  getPerson(): Observable<Person[]> {
    return this.personHttp.get<Person[]>(this.personUrl);
  }
  getCountry(): Observable<any> {
    return this.personHttp.get(this.personUrl);
  }

  deletePerson(id: number) {
    return this.personHttp.delete(`${this.personUrl}/${id}`);
  }
}
