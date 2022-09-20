import { CouresService } from './courses.service';
import { Component, NgModule } from '@angular/core';

// had  l components 3ndo des  infos o des option kan dirohom fhad decorator
@Component({
  selector: 'courses', // tag bach n3ytol lhad  l components
  templateUrl:'./courses.component.html' ,
})



export class CoursesCompoenet {

  course={
    titre : 'Formation Complète Sur Angular ',
    avis : '4.988522',
    participants : 136,
    prix : 950.38,
    publicationData : new Date(2022,9,15)
  }




  title = 'la liste de les cours';
  Email = 'oussama@gmail.com';
  isActive=true ;
  courses;
  Image =
    'https://i.ytimg.com/vi/NBdfuAxvwRQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLFp3sMz2jHsyoxL4plwIEWsg6ww';

  constructor(couresService: CouresService) {
    this.courses = couresService.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onClick($event:any){
      $event.stopPropagation(); // ghadi t executa  hir hadi les autre event va ignorer
    console.log("button clicked !!" , $event)
  }

    onClickDiv($event:any){
      $event
      console.log('div clicked :', $event)
    }

    // filtage des event  :
    onKeyUp($event:any){
      // if($event.keyCode === 13)
      console.log('keyUp is worked  Now  ')
      // la methode de js  et ts
      console.log($event.target.value)
    }


// template variable
    onKeyUp1(email:any){
      console.log("email : ", email.value)
    }


//
onKeyUp2(){
  console.log(this.Email)
}

}
