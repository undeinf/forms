import { UsernameValidator } from './username-validator';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidator.cannotContainsSpace
        ],
        UsernameValidator.nameIsUnique
      ),
      password: new FormControl('', Validators.required)
      })
  });

  login(){
    this.form.setErrors({
      invalidLogin:true
    });
  }

  get username(){
    return this.form.get('account.username')
  }
}
