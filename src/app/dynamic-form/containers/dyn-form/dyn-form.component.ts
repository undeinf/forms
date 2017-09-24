import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    styleUrls: ['dyn-form.component.css'],
    template: `
    <form
    class="dynamic-form"
    [formGroup]="form"
    (ngSubmit)="submitted.emit(form.value)">
    <ng-container
      *ngFor="let field of config;"
      dynamicField
      [config]="field"
      [group]="form">
    </ng-container>
  </form>
    `
  })

  export class DynamicFormComponent implements OnInit {
    @Input()
    config: any[] = [];

    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();
  
    form: FormGroup;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.form = this.createGroup();
    }
  
    createGroup() {
      const group = this.fb.group({});
      this.config.forEach(control => group.addControl(control.name, this.fb.control({})));
      return group;
    }
  }
  