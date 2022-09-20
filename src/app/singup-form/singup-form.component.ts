import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import {UsernameValidator} from './username.validator'

@Component({
  selector: 'singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {



  constructor() { }



  ngOnInit(): void {
  }

form = new FormGroup({
  username : new FormControl('', [Validators.required ,Validators.minLength(4) , UsernameValidator.connotContainSpace] ),
  password : new FormControl('', [Validators.required,Validators.minLength(4) ,Validators.maxLength(10)])

})

get username(){
  console.log(this.form.get('username')?.errors)
  return this.form.get('username');
}


get password(){
  return this.form.get('password');
}

}
