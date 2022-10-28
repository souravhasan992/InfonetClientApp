import { Component, OnInit } from '@angular/core';
import { CountryCityService } from './../../shared/country-city.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  countries: any;
  states: any;
  cities: any;
  selectedCountry: any = {
    id: 0,
    name: '',
  };
  selectedState: any = {
    id: 0,
    name: '',
  };
  selectedCity: any = {
    id: 0,
    name: '',
  };

  constructor(private countryService: CountryCityService) {}

  ngOnInit(): void {
    this.showAll();
    this.onCountrySelect(this.selectedCountry.id);
    this.onStateSelect(this.selectedState.id);
    this.onCitySelect(this.selectedState.id);
  }
  showAll() {
    this.countryService.getCountries().subscribe((data) => {
      console.warn(data);
      this.countries = data.countries;
      console.warn(this.countries);
    });
  }

  onCountrySelect(country_id: any) {
    this.countryService.getCountries().subscribe((data: any) => {
      (this.states = data.states.filter(
        (res: any) => res.country_id == country_id!.value
      )),
        console.warn(this.states);
    });
  }
  onStateSelect(state_id: any) {
    this.countryService.getCountries().subscribe((data: any) => {
      (this.cities = data.cities.filter(
        (res: any) => res.state_id == state_id!.value
      )),
        console.warn(this.cities);
    });
  }
  onCitySelect(city_id: any) {
    this.countryService.getCountries().subscribe((data: any) => {
      (this.cities = data.cities.filter(
        (res: any) => res.city_id == city_id!.value
      )),
        console.warn(this.cities);
    });
  }
}
