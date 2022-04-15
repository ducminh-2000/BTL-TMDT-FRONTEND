import { Component, Input, OnInit } from '@angular/core';
import { BookItem } from 'src/app/api/models/BookItem';
import { Cart } from 'src/app/api/models/Catr';
import { MessageService } from 'src/app/api/services/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart!: Cart

  cartItems: any[] = [];
  totalPrice = 0;
  constructor(
    private msg: MessageService
  ) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((data: any) => {
      if (this.cartItems.length > 0) {
        this.cartItems.forEach((item) => {
          if (item.id === data.id) {
            item.quantity++;
          }
          else {
            this.cartItems.push({
              id: data.id,
              name: data.name,
              quantity: 1,
              price: data.price
            })
          }
        })
      }
      else{
        this.cartItems.push({
          id: data.id,
          name: data.name,
          quantity: 1,
          price: data.price
        })
      }


      this.totalPrice = 0;

      this.cartItems.forEach((item: any) => {
        this.totalPrice += (item.price * item.quantity)
      })
    })

  }

  remove(index: number) {
   
    if(this.cartItems[index].quantity > 1)
    {
      this.cartItems[index].quantity--;
    }
    else {
      this.cartItems.splice(index, 1)
    }
    this.totalPrice -= (this.cartItems[index].price)

  }

  checkout(){
    console.log(this.totalPrice)
  }

}
