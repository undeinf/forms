import { Field } from './../../models/field.interface';
import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.css'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        value="{{config.value}}"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" />
    </div>
  `
})
export class FormInputComponent implements Field {
  config;
  group: FormGroup;
}