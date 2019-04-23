import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.scss'],
})
export class EditmovieComponent implements OnInit {

  constructor(private router:Router,private movieService:MovieService,private route:ActivatedRoute) { }
movie:any;
private sub:any;
id:number;
params:any
  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.id= +params['id'];
      this.movieService.getMovieById(this.id).subscribe((movie)=>{
        this.movie=movie
      })
    })
  }
  updateMovies(movie){
    this.movieService.UpdateMovie(movie);
    this.router.navigate(['/movie'])
    this.movieService.getRemoteMovie();
  }
}
