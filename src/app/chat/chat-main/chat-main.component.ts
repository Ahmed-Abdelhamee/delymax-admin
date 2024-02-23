import { DatePipe } from '@angular/common';
import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ChatList } from 'src/app/shared/interfaces/chat-list';
import { ChatMs } from 'src/app/shared/interfaces/chat-ms';
import { Customer } from 'src/app/shared/interfaces/customer';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { Message } from 'src/app/shared/interfaces/message';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import { MessengerService } from 'src/app/shared/service/messenger.service';
import { MessagingService } from 'src/service/messaging.service';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit,OnDestroy {
  chatsList: Message[] = [];
  chatsListAfter: any = [];
  messageChat = "";
  customer:Customer;
  deliveryBoy:DeliveryBoy;
  members;
  id:any;
  chatMs:ChatList = new ChatList();
  userID:any;
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

  constructor(private ngZone: NgZone,private messengerService:MessengerService,private route:ActivatedRoute
    ,private database: AngularFireDatabase,private authService:AuthService,private deliveryService:DeliveryService) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();

    this.id = this.route.snapshot.queryParams["id"];
    this.userID = this.route.snapshot.queryParams["user"];
    console.log(this.id)
   
  }
  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
    console.log("closed");
  }
  getChatMs(userID: any) {
   this.messengerService.getChatMs(userID).subscribe(chatMs=>this.chatMs=chatMs);
   this.scrolltoB();
  }

  getUser(userID: any) {
    if(this.chatMs.type !='support'){
     // this.authService.getCustomer(userID).subscribe(customer=>this.customer=customer);
    }else{
      this.deliveryService.getDB(userID).subscribe(deliveryboy=>this.deliveryBoy = deliveryboy);
      console.log(this.deliveryBoy)
    }
    

   }

  ngOnInit() {
    this.getChatMs(this.userID);
    this.getChat(this.id);
    this.getUser(this.userID);
    
  }
  getChat(id: any) {
   this.chatSubscription = this.messengerService.getChats(id).subscribe(res=>{
      this.chatsList=res;
      this.noSeenChats = this.chatsList.filter(chat=>!chat.isseen && chat.receiver =="0102");
      console.log(this.noSeenChats)
      this.seenMessage(this.noSeenChats)
    });
    
    if(this.chatsListAfter.length<this.chatsList){
      
      this.chatsListAfter = this.chatsList;
      this.scrolltoB();
    }
    this.scrolltoB();
  }
  seenMessage(chats:Message[]) {
   chats.forEach(element => {
     this.database.object('Chats/'+element.id+'/isseen').set(true);
   });
  }
  scrolltoB() {
    var element = document.getElementById("chats");
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});  

  }



ngAfterViewChecked() {        
   this.scrolltoB();    
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
        type:"text",
        time:date,
        sort:""+time,
        with:"shop",
        ref:this.chatMs.ref,
        message: this.messageChat,
        status: "sent",
      };

      let obj1:any;
      let obj2:any;
      if(this.chatMs.type !='support'){
        obj1={
          block: "false",
          id: this.chatMs.id,
          last_msg: this.messageChat,
          name: this.chatMs.name,
          ref: this.chatMs.ref,
          timeStamp: ""+time,
          type: "shop",
          zone: this.chatMs.zone
        }
        obj2={
          block: "false",
          id: "0102",
          last_msg: this.messageChat,
          name: this.chatMs.name,
          ref: this.chatMs.ref,
          timeStamp: ""+time,
          type: "shop",
          zone: this.chatMs.zone
        }
      }else{
        obj1={
          block: "false",
          id: this.chatMs.id,
          last_msg: this.messageChat,
          name: this.chatMs.name,
          ref: this.chatMs.ref,
          timeStamp: ""+time,
          type: "support",
          zone: this.chatMs.zone
        }
        obj2={
          block: "false",
          id: "0102",
          last_msg: this.messageChat,
          name: this.chatMs.name,
          ref: this.chatMs.ref,
          timeStamp: ""+time,
          type: "support",
          zone: this.chatMs.zone
        }
      }
     
      this.messengerService.sendMessage(obj);
      this.messengerService.sendChatMsUser(obj2,this.chatMs.id);
      this.messengerService.sendChatMsShop(obj1);
     
      this.messageChat = "";
      this.scrolltoB();
    }
   
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}


  public innerHeight: any;

  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

 

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
  }

  goToOrder(orderId:string){
    console.log(orderId);
  }
 
}

