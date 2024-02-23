import { DatePipe } from '@angular/common';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatList } from 'src/app/shared/interfaces/chat-list';
import { ChatMs } from 'src/app/shared/interfaces/chat-ms';
import { MessengerService } from 'src/app/shared/service/messenger.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  chatsList: ChatList[] = [];
  chatsListAfter: ChatList[] = [];
  messageChat = "";
  members;
  public pageNo: number = 1;
  public paginate: any = {};
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild("imagePond", { static: false }) imagePond: any;
  public pipe = new DatePipe("en-US");
  chatMsList:ChatMs[]=[];

  pondOptions = {
    class: "my-filepond",
    multiple: true,
    labelIdle: "Browse and Drop files here",
    acceptedFileTypes: "image/jpeg, image/png",
  };

  pondFiles = ["assets/imges/logo2.png"];

  constructor(private route: ActivatedRoute, private router: Router,private ngZone: NgZone,private messengerService:MessengerService) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();
  
    
    
  }

  ngOnInit() {
 
  //  if(this.route.snapshot.queryParams["page"]){
    //  console.log("d")
      this.route.queryParams.subscribe(params => {
        console.log("d")
        this.pageNo = params.page ? params.page : this.pageNo;
        this.messengerService.getChatsReciver("0102").subscribe(res=>{
          this.chatsList=res;
        this.paginate = this.messengerService.getPager(this.chatsList.length, +this.pageNo);     // get paginate object from service
        console.log(this.paginate)
        this.chatsListAfter = this.chatsList.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
         
        });
        
        
        });
   /*  }else{
       console.log("dd")
        this.messengerService.getChatsReciver("0102").subscribe(res=>{
          this.chatsList=res;
        this.paginate = this.messengerService.getPager(this.chatsList.length, +this.pageNo);     // get paginate object from service
        console.log(this.paginate)
        this.chatsListAfter = this.chatsList.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
         
        });
        
       
     }
    */
    
  }
  
 // product Pagination
 setPage(page: number) {
   
  this.router.navigate(['chat'], { queryParams: { page: page },replaceUrl: true})
}


public innerHeight: any;

  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

 

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
  }



 

 

 

}

