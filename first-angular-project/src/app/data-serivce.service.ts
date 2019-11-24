import { Injectable } from '@angular/core';

export interface commentData {
  text: string,
  date: string
}
interface cardsData {
  img: string,
  title: string,
  showInf: boolean,
  description: string,
  userComment: [],
  showCommentsBlock: boolean
}
@Injectable({
  providedIn: 'root'
})

export class DataSerivceService {
  cardsList: any[]; //список всех карточек
  currCard: any; //текущая карта
  card1: cardsData;
  card2: cardsData;
  card3: cardsData;
  // card4: cardsData;

  constructor() {
    this.card1 = {
      img: "http://placekitten.com/300/300",
      title: "Котик 1",
      showInf: false,
      description: "Подробное описание 1",
      userComment: [],
      showCommentsBlock: false
    };
    this.card2 = {
      img: "http://placekitten.com/300/300",
      title: "Котик 2",
      showInf: false,
      description: "Подробное описание 2",
      userComment: [],
      showCommentsBlock: false
    };
    this.card3 = {
      img: "http://placekitten.com/300/300",
      title: "Котик 3",
      showInf: false,
      description: "Подробное описание 3",
      userComment: [],
      showCommentsBlock: false
    };
    // this.card4 = {
    //   img: "http://placekitten.com/300/300",
    //   title: "Котик 4",
    //   showInf: false,
    //   description: "Подробное описание 4",
    //   userComment: [],
    //   showCommentsBlock: false
    // };
    this.cardsList = [
      this.card1,
      this.card2,
      this.card3,
      // this.card4
    ];
    this.currCard = {};
  }

}
