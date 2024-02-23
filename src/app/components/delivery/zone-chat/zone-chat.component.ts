import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ChatList } from 'src/app/shared/interfaces/chat-list';
import { ChatMs } from 'src/app/shared/interfaces/chat-ms';
import { Customer } from 'src/app/shared/interfaces/customer';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { Message } from 'src/app/shared/interfaces/message';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import { MessengerService } from 'src/app/shared/service/messenger.service';

@Component({
  selector: 'app-zone-chat',
  templateUrl: './zone-chat.component.html',
  styleUrls: ['./zone-chat.component.scss']
})
export class ZoneChatComponent implements OnInit {

  chatsList: ChatList[] = [];
  chats: Message[] ;
  chatsAfter:Message[]=[];
  messageChat = "";
  currentIndex = "";
  dBoy:DeliveryBoy;
  currentChat:ChatList;
  members;
  id:any;
  chatMs:ChatList;
  userID:any;
  customer:Customer;
  noSeenChats:Message[]=[];

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild("imagePond", { static: false }) imagePond: any;
  public pipe = new DatePipe("en-US");
  todosProyectos: AngularFireList<any>;
  proyectos: Observable<Message[]>;
  pondOptions = {
    class: "my-filepond",
    multiple: true,
    labelIdle: "Browse and Drop files here",
    acceptedFileTypes: "image/jpeg, image/png",
  };
  private chatSubscription: Subscription;

  pondFiles = ["assets/img/logo2.png"];
  public pageNo: number = 1;
  public paginate: any = {};
 @Input() stateId:string;

  constructor(private route: ActivatedRoute, private router: Router,private database: AngularFireDatabase,private ngZone: NgZone
    ,private messengerService:MessengerService,private authService:AuthService,private deliveryService:DeliveryService) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();
  
    
    
  }

  ngOnInit() {
 
 
     
        this.messengerService.getZoneChatsReciver(this.stateId).subscribe(res=>{
          this.chatsList=res;
          
         
        });
        this.scrollToBottom();        
 
    
  }
  
 // product Pagination
 setPage(page: number) {
   
  this.router.navigate(['chat'], { queryParams: { page: page },replaceUrl: true})
}

sendMessage() {

  if(this.messageChat!=''){
    const time = new Date().getTime();
    const date = this.pipe.transform(new Date(), 'hh:MM a yyyy-MM-dd');
    const obj = {
      id:""+time,
      isseen:false,
      sender:"0102",
      receiver:this.chatMs.id,
      type:this.chatMs.type,
      time:date,
      sort:""+time,
      with:"shop",
      ref:this.chatMs.ref,
      message: this.messageChat,
      status: "sent",
    };

    const obj1={
      block: "false",
      id: this.chatMs.id,
      last_msg: this.messageChat,
      name: this.chatMs.name,
      ref: this.chatMs.ref,
      timeStamp: ""+time,
      type: this.chatMs.type,
      notSeen: false,
      zone: this.stateId
    }
    const obj2={
      block: "false",
      id: "0102",
      last_msg: this.messageChat,
      name: "Shoppy",
      ref: this.chatMs.ref,
      timeStamp: ""+time,
      type: this.chatMs.type,
      notSeen: true,
      zone: this.stateId
    }
    this.messengerService.sendMessage(obj);
    this.messengerService.sendChatMsUser(obj2,this.chatMs.id);
    this.messengerService.sendChatMsShop(obj1);
   
    this.messageChat = "";
    this.scrolltoB()
  }
 
}
scrolltoB() {
  var element = document.getElementById("chats");
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({block: "end"});
  element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});  

}
public innerHeight: any;

  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

 

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
  }


  ngAfterViewChecked() {        
   this.scrollToBottom();        
}
 
  setActiveChat(chat: ChatList): void {
    this.currentChat = chat;
    this.currentIndex = chat.id;
    this.getChatMs(chat.id);
    this.getChat(chat.ref);
    if(chat.type =='support'){
      this.getDelivery(chat.id);
    }else{
      this.getUser(chat.id);
    }
    
  }
  getDelivery(id: string) {
   this.deliveryService.getDB(id).subscribe(res=>{
     this.dBoy = res;
   })
  }

  getChat(id: any) {
    this.chatSubscription = this.messengerService.getChats(id).subscribe(res=>{
       this.chats=res;
       this.noSeenChats = this.chats.filter(chat=>!chat.isseen && chat.receiver =="0102");
       console.log(this.noSeenChats)
       this.seenMessage(this.noSeenChats);
       if(this.currentIndex == res[0].sender)
         this.seenAllMessage(res[0].sender)
       this.scrollToBottom();
       if(this.chatsAfter.length<this.chats.length){
       
        this.chatsAfter = this.chats;
        this.scrollToBottom();
      }
     });
     
     
    
   }
  
   seenMessage(chats:Message[]) {
    chats.forEach(element => {
      this.database.object('Chats/'+element.id+'/isseen').set(true);
    });

   }
   seenAllMessage(chatId:string) {
    this.database.object('Chatlist/0102/'+chatId+'/notSeen').set(false);
   }
  getChatMs(userID: any) {
    this.messengerService.getChatMs(userID).subscribe(chatMs=>this.chatMs=chatMs);
    //this.scrolltoB();
   }
 
   getUser(userID: any) {
    // this.authService.getCustomer(userID).subscribe(customer=>this.customer=customer);
 
    }
 
    scrollToBottom(): void {
      try {
         // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          this.myScrollContainer.nativeElement.scrollIntoView();
          this.myScrollContainer.nativeElement.scrollIntoView(false);
          this.myScrollContainer.nativeElement.scrollIntoView({block: "end"});
          this.myScrollContainer.nativeElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});  
      } catch(err) { }                 
  }
 
  ngOnDestroy(): void {
    if(this.chatSubscription!=null)
    this.chatSubscription.unsubscribe();
    console.log("closed");
  }

}

