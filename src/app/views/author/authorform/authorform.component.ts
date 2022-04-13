import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/api/models/Author';
import { AuthorService } from 'src/app/api/services/author.service';

@Component({
  selector: 'app-authorform',
  templateUrl: './authorform.component.html',
  styleUrls: ['./authorform.component.css']
})
export class AuthorformComponent implements OnInit {

  @Input() author: any;
  constructor(
    private authorApi: AuthorService
  ) { }

  ngOnInit(): void {
  }

  upsert(){
    if(this.author.id){
      this.update()
    }
    else this.add()
  }

  add(){
    this.authorApi.create(this.author).subscribe(() => {
      alert('DONE')
    },
    (error) => {
      alert("ERROR")
    })
  }
  update(){
    this.authorApi.update(this.author,this.author.id).subscribe(() => {
      alert('DONE')
    },
    (error) => {
      alert("ERROR")
    })
  }
}
