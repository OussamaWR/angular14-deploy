import { BadInput } from './../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  status = true;

  post = {
    id: 0,
    title: '',
    body: '',
    userId: '',
  };

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getAll().subscribe((response) => {
      this.posts = response;
    }, error=>{


      alert('error inattendue');
      console.log(error)
    });
  }





  createPost() {
    this.postService.create(this.post).subscribe((res:any) => {
      // Convert Object to JsonObject
      // console.log(JSON.parse(JSON.stringify(res)).id);
      // this.post.id = JSON.parse(JSON.stringify(res)).id;
       this.post.id = res.id;
      console.log("data => ",res)
      this.posts = [this.post, ...this.posts];
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: '',
      };
    }, (error:AppError)=>{
      if(error instanceof BadInput){
        alert('merci de verifié vos informations ');
      }else{
        alert('error inattendue')
         console.log(error)
      }


    });
  }




  editPost(post: any) {
    console.log(post);
    this.post = post;
    this.status = false;
  }





  update() {
    this.postService.update(this.post).subscribe((res) => {
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: '',
      };
      this.status = !this.status;
    }, error=>{
      alert('error inattendue');
      console.log(error)
    });
  }


  deletePost(post: any) {
    console.log("1",post)
    this.postService.delete(123).subscribe((res) => {
      let index = this.posts.indexOf(post);
      console.log(index);
      this.posts.splice(index, 1);
    },

    (error : AppError)=>{

      if( error instanceof NotFoundError){ // ghadi n verifié wach error m instancé mn NotFoundError wla la

        alert('ce post est deje supprimé !! ');

      }else{



        alert('error inattendue');


      }

    });
  }
}
