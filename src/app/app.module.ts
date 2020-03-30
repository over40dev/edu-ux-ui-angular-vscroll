import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicScrollComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCWg6Q5OiDHcpbwiLUCbDnUKVA5ZP_83c0',
      authDomain: 'edu-angular-firebase.firebaseapp.com',
      databaseURL: 'https://edu-angular-firebase.firebaseio.com',
      projectId: 'edu-angular-firebase',
      storageBucket: 'edu-angular-firebase.appspot.com',
      messagingSenderId: '577426671351',
      appId: '1:577426671351:web:24cb7b9e574feb1b9c75f2',
      measurementId: 'G-ZXJZX7XTL2'
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
