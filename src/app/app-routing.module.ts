import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';

const routes : Routes=[ { path: 'home', component: HomeComponent },
{ path: 'followres', component: GitComponent },
{ path: 'followres/:username/:id', component: ProfileComponent },
{ path: 'posts', component: PostsComponent },
{ path: '**', component: PageNotFoundComponent },] ;

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{}

