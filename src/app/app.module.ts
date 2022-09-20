import { CouresService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesCompoenet } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { GitComponent } from './git/git.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesCompoenet,
    CourseComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SingupFormComponent,
    PostsComponent,
    GitComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule , AppRoutingModule],
  providers: [CouresService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
