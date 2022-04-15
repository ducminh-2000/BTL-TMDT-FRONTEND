import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cartItems: any
  constructor() { }

  totalPrice = 0;

  ngOnInit(): void {
    
  }
  remove(i: number){

  }
  checkout(){

  }
}
