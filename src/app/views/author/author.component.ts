import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/api/models/Author';
import { AuthorService } from 'src/app/api/services/author.service';
import { AuthorformComponent } from './authorform/authorform.component';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[] = [];
  public filter: string = '';
  constructor(
    private authorApi: AuthorService,
    private route: Router,
    private bsModalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor() {
    console.log(this.filter)
    this.authorApi.getAll(this.filter).subscribe(
      (data: Author[]) => {
        this.authors = data;
      })
  }

  update(author: Author){
    this.route.navigate(['/update'])
  }

  create(){
    this.route.navigate(['/create'])
  }

  delete(author: Author){
    this.authorApi.delete(author.id).subscribe(() => {
      this.getAuthor()
    })
  }

  showAddItemModal() {
    const account: Author = new Author();
    this.showCRUDItemModal(account, 1);
  }

  showEditItemModal(item: Author) {
    const itemToEdit = Object.assign({}, item);
    this.showCRUDItemModal(itemToEdit, 1);
  }

  showCRUDItemModal(account: Author, option: number) {
    if (option == 1) {
      const modalRef = this.bsModalService.show(AuthorformComponent, {
        initialState: {
          author: account,
        },
        class: 'modal-lg',
      });
      // modalRef.content.onResult.subscribe((result) => {
      //   if (!result.isCancelled) {
      //     this.getAuthor();
      //   }
      // });
    }
  }

}
