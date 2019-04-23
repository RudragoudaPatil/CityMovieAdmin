import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {

  list=[];
movies= this.movieService.getRemoteMovie();
movie ={ name:'',year:'',image_url:'',production_house:'',rating:'',type:'',language:'',date:''}
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit() {
    this.movieService.getRemoteMovie().subscribe((result) => {this.list = result;});
  }

addMovies(movie){
  this.movieService.addRemoteMovie(this.movie).subscribe(()=>{
    this.router.navigate(['/movie']);
  });
  console.log(JSON.stringify(this.movie));
}


}
