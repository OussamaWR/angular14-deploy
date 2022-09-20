import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ContactMethode = [{id :1,name:'email'}, {id:2,name:'telephone'},{id:3,name:'sms'} ,{id:4,name:'SocialMedia'}];

  constructor() { }

  ngOnInit(): void {
  }
  log(value : any){
    console.log(value)
  }

  submit(f:any){
    console.log(f.value)
  }


}
