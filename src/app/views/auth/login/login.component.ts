import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/api/models/Catr';
import { Customer } from 'src/app/api/models/Customer';
import { CustomerService } from 'src/app/api/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private customerApi: CustomerService
  ) { }

  ngOnInit(): void {
  }

  login(username: string, pass: string){
    this.customerApi.login(username,pass).subscribe((user: Customer) => {
      localStorage.setItem('user', JSON.stringify(user))
      let cart = new Cart();
      localStorage.setItem('cart', JSON.stringify(cart))
    })
  }

}
