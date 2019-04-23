import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  list=[];
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit() {
   this.movieService.getRemoteMovie().subscribe((result) => {this.list = result;});
    console.log(this.list);
  }
  // onBooking(m){
  // this.router.navigate(['/booking/'+m.id])
  // }
  onLogout(){
    this.router.navigate(['/login'])
  }
  onAdd(){
    this.router.navigate(['/addmovie'])
  }
  deleteMovie(m){
    this.movieService.deleteRemoteMovie(m).subscribe((e) => {
      this.movieService.getRemoteMovie().subscribe((result) => {
        this.list = result;
      });
    });
  }
  onEdit(m){
    this.router.navigate(['/edit/'+m.id]);
  }
}