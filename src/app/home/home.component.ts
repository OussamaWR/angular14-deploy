import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route : Router) { }

  ngOnInit(): void {
  }

  ajouter(){
    this.route.navigate(['followres',12,'oussama'],{
      queryParams :  {page:1,type:'Admin',var:'val'}
    }) // 1er params => path+/:id/:username 2eme queryVar ,?var1=val&var2=val2
  }
}
