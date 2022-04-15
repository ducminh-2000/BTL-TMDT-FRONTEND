import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BookItem } from 'src/app/api/models/BookItem';
import { Cart } from 'src/app/api/models/Catr';
import { BookItemService } from 'src/app/api/services/bookItem.service';
import { MessageService } from 'src/app/api/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookItems: BookItem[] = [];
  public filter: string = '';
  constructor(
    private bookItemApi: BookItemService,
    private route: Router,
    private bsModalService: BsModalService,
    private msg: MessageService
  ) { }

  ngOnInit(): void {
    this.getBookItem();
  }

  getBookItem() {
    console.log(this.filter)
    this.bookItemApi.getAll(this.filter).subscribe(
      (data: BookItem[]) => {
        this.bookItems = data;
      })
  }

  update(bookItem: BookItem){
    this.route.navigate(['/update'])
  }

  create(){
    this.route.navigate(['/create'])
  }

  delete(bookItem: BookItem){
    // this.bookItemApi.delete(bookItem.id).subscribe(() => {
    //   this.getBookItem()
    // })
  }

  addToCart(bookItem: BookItem){
    console.log(bookItem)
    this.msg.sendMsg(bookItem)
  }

  showAddItemModal() {
    const account: BookItem = new BookItem();
    this.showCRUDItemModal(account, 1);
  }

  showEditItemModal(item: BookItem) {
    const itemToEdit = Object.assign({}, item);
    this.showCRUDItemModal(itemToEdit, 1);
  }

  showCRUDItemModal(account: BookItem, option: number) {
    if (option == 1) {
      // const modalRef = this.bsModalService.show(BookItemformComponent, {
      //   initialState: {
      //     BookItem: account,
      //   },
      //   class: 'modal-lg',
      // });
      // modalRef.content.onResult.subscribe((result) => {
      //   if (!result.isCancelled) {
      //     this.getBookItem();
      //   }
      // });
    }
  }
}
