import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { NgChatModule } from 'ng-chat';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';


@NgModule({
  declarations: [ChatMainComponent, ChatListComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,

    SharedModule,
    FormsModule
  ]
})
export class ChatModule { }
