import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CityListProviderService } from '../services/city-list-provider.service';
import { MatSelectChange } from '@angular/material';

interface city {
  id: number;
  name: string;
  state: string;
}

@Component({
  selector: 'app-business-data-form',
  templateUrl: './business-data-form.component.html',
  styleUrls: ['./business-data-form.component.scss']
})
export class BusinessDataFormComponent implements OnInit {

  private businessData: FormGroup;
  private cityEmitter = new Subject<any>();
  private cityLists: string[][] = [];
  private selectedCities = [];
  private cityListData = [];

  constructor(private fb: FormBuilder, private cityService: CityListProviderService) { }

  ngOnInit() {
    this.businessData = this.fb.group({
      name: [''],
      addresses: this.fb.array([])
    });

    this.cityService.getCities().subscribe(cities => {
      this.cityListData = cities;
    })
  }

  get addresses() {
    return this.businessData.get('addresses') as FormArray;
  }

  addCityAddress() {
    const address = this.fb.group({
      city: ['', Validators.required],
      completeAddress: ['']
    });
    this.addresses.push(address);
    this.cityLists.push(this.cityListData.filter(city => !this.selectedCities.includes(city)));
  }

  removeCity() {
    this.addresses.removeAt(this.addresses.length - 1);
    this.cityLists.pop();
    if (this.addresses.length !== this.selectedCities.length) {
      const poppedCity = this.selectedCities.pop();
      this.cityLists.forEach(list => {
        list.push(poppedCity);
      })
    }
  }

  citySelected(selection: MatSelectChange) {
    const city = selection.value;
    if (this.addresses.length !== this.selectedCities.length) {
      selection.source.id = this.addresses.length - 1 + '';
    }
    const id = parseInt(selection.source.id);

    if (this.selectedCities[`${id}`]) {
      const oldCity = this.selectedCities[id];
      const newCity = city;
      this.cityLists.forEach((list, i) => {
        if (i !== id) {
          list.push(oldCity);
          this.cityLists[i] = list.filter(cityIt => cityIt !== newCity);
        }
      })


      this.selectedCities[`${id}`] = city;
    } else {
      this.cityLists.forEach((list, i) => {
        if (i !== id) {
          this.cityLists[i] = list.filter(cityIt => cityIt !== city);
        }
      })
      this.selectedCities[`${id}`] = city;
    }
  }

  onSubmit() {
    console.log(this.businessData.value);
  }

}
