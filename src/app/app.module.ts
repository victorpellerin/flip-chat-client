import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

// => Pages
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatListComponent } from './pages/chat-list/chat-list.component';

// => Services
import { ChatService } from './services/chat.service';
import { SocketsService } from './services/sockets.service';

const routes: Routes = [
  { path: '', component: ChatListComponent },
  { path: 'join', component: JoinPageComponent },
  { path: 'join/:id', component: JoinPageComponent },
  { path: 'room/:id', component: ChatPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    JoinPageComponent,
    ChatPageComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [ChatService, SocketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
