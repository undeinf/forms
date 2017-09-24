import { Field } from './../../models/field.interface';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.css'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options" [selected]="option == config.value">
          {{ option }}
        </option>
      </select>
    </div>
  `
})
export class FormSelectComponent implements Field {
  config;
  group: FormGroup;
}