import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  errorRoute : boolean = false;

  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.setError();
  }

  setError(){
    if(this.errorRoute){
      this.router.navigate(['/error'])
    }
  }

  dynamicRouting(){
    this.router.navigate(['/strategy'])
  }
  dynamicRouting2(){
    this.router.navigate(['/home'])
  }

  

}

