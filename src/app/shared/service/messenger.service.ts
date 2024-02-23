import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ChatList } from "../interfaces/chat-list";
import { ChatMs } from "../interfaces/chat-ms";
import { Message } from "../interfaces/message";
import { FileUploadService } from "./file-upload.service";
import { MessageService } from "./message.service";

@Injectable({
    providedIn: 'root'
  })
  export class MessengerService {
 
    constructor(private database: AngularFireDatabase,
        private storage: AngularFireStorage,
        private messageService: MessageService,
        private uploadService: FileUploadService) {


         }

         getChatsReciver(id: any): Observable<ChatList[]>  {
            return this.database
              .list<ChatList>('Chatlist/'+id, (ref) => ref.orderByChild("timeStamp"))
              .valueChanges()
              .pipe(map((arr) => 
              arr.reverse()
              
              ));
      }

      getZoneChatsReciver(id: any): Observable<ChatList[]>  {
        return this.database
          .list<ChatList>('Chatlist/0102', (ref) => ref.orderByChild("zone").equalTo(id))
          .valueChanges()
          .pipe(map((arr) => 
          arr.sort((a,b)=>b.timeStamp.localeCompare(a.timeStamp))
          
          ));
  }

      getChatReciverId(id: any,uid:string): Observable<ChatList[]>  {
        return this.database
          .list<ChatList>('Chatlist/'+id, (ref) => ref.orderByChild("id").equalTo(uid))
          .valueChanges()
          .pipe(map((arr) => 
          arr.reverse()
          
          ));
  }

      getChats(id: any): Observable<Message[]>  {
        return this.database
          .list<Message>('Chats', (ref) => ref.orderByChild("ref").equalTo(id))
          .valueChanges()
          .pipe(map((arr) => 
          arr
          
          ));
  }

  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {

    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) { 
      currentPage = 1; 
    } else if (currentPage > totalPages) { 
      currentPage = totalPages; 
    }
    
    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if(currentPage < paginateRange - 1){
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage =  currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }




  public getChatMs(id: string): Observable<ChatList | null> {
    return this.database
      .object<ChatList>('Chatlist/0102/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {
            this.messageService.addError(`Found no chats with id=${id}`);
            return of(null);
          }
        }),
        
      );
  }

  sendMessage(message) {
    this.database.object('/Chats/'+message.id).update(message);
  }
  sendChatMsUser(obj,id) {
    this.database.object('Chatlist/'+id+'/0102').update(obj);
  }
  sendChatMsShop(obj) {
    this.database.object('Chatlist/0102/'+obj.id).update(obj);
  }
}