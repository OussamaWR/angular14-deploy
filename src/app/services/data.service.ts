import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';



import { NotFoundError } from './../common/not-found-error';

import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(@Inject(String) private url:string , private http : HttpClient) { }


  getAll(){
    return   this.http.get(this.url).pipe(
     /*map((response : Response)=>response.json()) ,*/
    )
  }

  create(resource:any){
    return this.http.post(this.url, resource)

    .pipe( /*map((response : Response)=>response.json()) ,*/catchError(this.handleError));
  }

  update(resource:any){
    return  this.http.put(this.url+'/'+resource.id,resource).pipe(
     /*map((response : Response)=>response.json()) ,*/
    )

  }

  delete(resource:any){
    return  this.http.delete(this.url+'/'+resource.id)
    .pipe(/*map((response : Response)=>response.json()) ,*/catchError(this.handleError));

  }


  private handleError(error: Response) {
    if (error.status === 404) {
      console.log('Error 404')
      return throwError(() => new NotFoundError());
    }

    if (error.status === 400) {
      return throwError(() => new BadInput());
    }

    return throwError(() => new AppError());
  }

}









