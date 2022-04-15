import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

    subject = new Subject();
    constructor() {}

    sendMsg(product: any){
        this.subject.next(product)
    }

    getMsg(){
        return this.subject.asObservable()
    }
}
