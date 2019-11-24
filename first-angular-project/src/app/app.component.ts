import { Component, ViewChild } from '@angular/core';
import { CardInformationComponent } from './card-information/card-information.component';
import { DataSerivceService } from './data-serivce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  // @ViewChild(CardInformationComponent, {static: false}) cardDetail: CardInformationComponent;

  commentsBlock: Boolean;
  constructor(private dataSrvc: DataSerivceService) {
    this.commentsBlock = false;
  }
  //показать блок с информацией
  showInformation(currEl): void {
    for(const card of this.dataSrvc.cardsList) {
      card.showInf = false;
    }
    this.dataSrvc.currCard = currEl;
    this.dataSrvc.currCard.showInf = !this.dataSrvc.currCard.showInf;
  }
  showCommentsBlock(): void {

  }

}
