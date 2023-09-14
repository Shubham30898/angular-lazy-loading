import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angular';

  constructor(private router: Router){
    
  }

  ngOnInit() {
    this.dymanicRouting();
  }

  dymanicRouting(){
    console.log('error component called');
    
    setTimeout( ()=>{
      this.router.navigate([`/error`]);
    }, 1000)
  }
  
    
}
