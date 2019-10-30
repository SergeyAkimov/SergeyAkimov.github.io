import { Component, ViewChild } from '@angular/core';
import { CardInformationComponent } from './card-information/card-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  // @ViewChild(CardInformationComponent, {static: false}) cardDetail: CardInformationComponent;
  cards: any;
  currCard: any;
  constructor() {
    this.cards = [
      {
        img: "http://placekitten.com/300/300",
        title: "Котик 1",
        showInf: false,
        description: "Подробное описание 1",
        userComment: []
      },
      {
        img: "http://placekitten.com/300/300",
        title: "Котик 2",
        showInf: false,
        description: "Подробное описание 2",
        userComment: []
      },
      {
        img: "http://placekitten.com/300/300",
        title: "Котик 3",
        showInf: false,
        description: "Подробное описание 3",
        userComment: []
      },
      {
        img: "http://placekitten.com/300/300",
        title: "Котик 4",
        showInf: false,
        description: "Подробное описание 4",
        userComment: []
      }
    ];
    this.currCard = {};
  }
  showInformation(currEl): boolean {
    for(const card of this.cards) {
      card.showInf = false;
    }
    this.currCard = currEl;
    // setTimeout(()=>{this.cardDetail.comment = "Пример комментария"},1);
    return this.currCard.showInf = !this.currCard.showInf;
  }
  showMessage(message) {
    this.currCard.userComment.push(message);
    setTimeout(()=>{this.currCard.showInf = false;}, 1000);
  }

}
