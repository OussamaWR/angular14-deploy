import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {

@Input('is-fav') isSelected  : boolean = false;

@Output('change') click = new EventEmitter() ;

constructor() { }



  ngOnInit(): void {
  }



  onClick(){
  this.isSelected=!this.isSelected;
    console.log(this.isSelected)
     this.click.emit({newState:this.isSelected}); // had  la methode une foit ghadi t executa kan 9ololiha finma  tl9ay un evenement smiyto change executer la  methode  li declarer fih
  }

}
