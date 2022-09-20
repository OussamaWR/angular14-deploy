import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   username : any;
   id:any;
   page : any ;
   role : any;
   varr : any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.paramMap.subscribe(res=>{
    //   console.log(res.get('username'))
    //   this.username = res.get('username');
    //   this.id=res.get('id')
    // })


       // this.route.queryParamMap.subscribe((query)=>{
    //   console.log(query);
    //   this.page=query.get('page');
    //   this.role=query.get('type');
    //   this.varr=query.get('var')
    // })

    
    this.id=this.route.snapshot.paramMap.get('id');
    this.username=this.route.snapshot.paramMap.get('username');



      this.page=this.route.snapshot.queryParamMap.get('page')
      this.role=this.route.snapshot.queryParamMap.get('type')
      this.varr=this.route.snapshot.queryParamMap.get('var')



  }

}
