import { GitService } from './../services/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  users : any;
  constructor(private gitService : GitService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
  this.gitService.getAll().subscribe(
    (res)=>{

      this.users=res
      console.log(this.users)
    }
  )
  }
}
