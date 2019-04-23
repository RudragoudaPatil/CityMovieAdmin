import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 private moviesUrl= 'http://localhost:3001/api/movies';
  constructor(private http: HttpClient) { }


getRemoteMovie(): Observable<[]>{
  return this.http.get<[]>(this.moviesUrl);
}

addRemoteMovie(movie):Observable<any>{
  return this.http.post(this.moviesUrl,movie);
}
getMovieById(id):Observable<any>{
return this.http.get<[]>(this.moviesUrl+"/"+id)
}


deleteRemoteMovie(m){
  return this.http.delete(this.moviesUrl+"/"+m.id);
}
UpdateMovie(movie):Observable<any>{
  return this.http.put<[]>(this.moviesUrl,movie);
}
}