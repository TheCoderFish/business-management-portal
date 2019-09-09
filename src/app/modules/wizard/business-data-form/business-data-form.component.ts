import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const selectedCities = [];

@Component({
  selector: 'app-business-data-form',
  templateUrl: './business-data-form.component.html',
  styleUrls: ['./business-data-form.component.scss']
})
export class BusinessDataFormComponent implements OnInit {

  private businessData: FormGroup;
  private cityEmitter = new Subject<any>();
  private items: string[][];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.businessData = this.fb.group({
      name: [''],
      addresses: this.fb.array([])
    });

    this.items = [['a', 'b', 'c', 'd', 'e', 'f', 'g']];

    this.cityEmitter.pipe(
      filter(value => value !== null),
      map(x => x.city)
    ).subscribe((city: string) => {
      if (!selectedCities.includes(city)) {
        selectedCities.push(city);
        const arrIndex = selectedCities.length;
        const arr = this.items[arrIndex - 1];
        const k = arr.indexOf(city);
        this.items.push(arr.slice(0, k).concat(arr.slice(k + 1)));
      }
    });
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
    if (this.addresses.length > 1) {
      this.cityEmitter.next(this.businessData.value.addresses[this.addresses.length - 2]);
    }
  }

  removeCity() {
    this.addresses.removeAt(this.addresses.length - 1);
    if (this.items.length !== 1) {
      this.items.pop();
    }
    selectedCities.pop();
  }

  onSubmit() {
    console.log(this.businessData.value);
  }

}
