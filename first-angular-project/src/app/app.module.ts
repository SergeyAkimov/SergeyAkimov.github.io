import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CardInformationComponent } from './card-information/card-information.component';
import { CommentsBlockComponent } from './comments-block/comments-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CardInformationComponent,
    CommentsBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
