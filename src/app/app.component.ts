import { CouresService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  body='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias amet accusantium, qui commodi, voluptatibus velit a, eligendi iusto ut aliquid quod odit tempora. Vero facere, quisquam distinctio libero magnam officiis? azer  zerty rty u rtyu yu iy uio yui uio uio ui o hnj, bn, uji èè _o yui hjk hjk hjk hjk ghjk ghjg hjkg hj ghjg hjg hj ghjk hjk hjk hj hjg hjg hjg hjkz ertyui ghjk ghj ghjkg hjkg hj'
  post={
      title : 'intro-angular',
      isValid : false
  }


  viewCourse = "Laravel"
  cours:any;
  service = new CouresService();
  courses=this.service.getCourses();

  AddCourse(){
    this.cours=[...this.cours , {id:6,title : 'AddCours'}]
  }

  remove(cours:any){
    let index =this.cours.indexOf(cours);
    this.cours.splice(index,1)
  }

      update(cours:any){
    cours.title="Update"+cours.title
    }

  LoadCourses(){
this.cours=[
  {id:1 , title : "Laravel"},
  {id:2 , title : "Angular"},
  {id:3 , title : "VueJS"},
  {id:4 , title : "Symfony"},
  {id:5 , title : "AdonisJS"},
]
  }

  trackCourse(index:any,course:any){
    return course? course.id :undefined;

  }
  onFavoriteChanged(args:any){
    console.log("Favorite changed " , args)
  }

isSelected : boolean=true;
  onClick(){
    this.isSelected=!this.isSelected;
  }

// safe traversal operator

personne = {
  nom : 'Oussama El ouarie ',
  tel : '0650303315',
    adresse :null
  // adresse : {
  //   ville : 'Fes',
  //   code : "12000"
  // }
}

}
