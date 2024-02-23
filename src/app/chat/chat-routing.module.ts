import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatMainComponent } from './chat-main/chat-main.component';

const routes: Routes = [
  {
    path:'',
    component:ChatListComponent,
  },
  {
    path:'chat',
    component:ChatMainComponent,
  },
  {
    path:'chat-list',
    component:ChatListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
