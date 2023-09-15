import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit{
  constructor(private router: Router){

  }

  ngOnInit(): void {

  }

  dynamicRouting(){
    this.router.navigate(['/home'])
  }

  dynamicRouting2(){
    this.router.navigate(['/strategy'])
  }
  
}
