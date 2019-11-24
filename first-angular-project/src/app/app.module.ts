import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CardInformationComponent } from './card-information/card-information.component';
import { CommentsBlockComponent } from './comments-block/comments-block.component';
import { DataSerivceService } from './data-serivce.service';
import { FormComponent } from './form/form.component';
import { ValidatorMessageComponent } from './validator-message/validator-message.component';

@NgModule({
  declarations: [
    AppComponent,
    CardInformationComponent,
    CommentsBlockComponent,
    FormComponent,
    ValidatorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataSerivceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
