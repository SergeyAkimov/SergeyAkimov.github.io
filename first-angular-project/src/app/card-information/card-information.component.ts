import { Component, OnInit, Input } from '@angular/core';
import { DataSerivceService } from '../data-serivce.service';
import { commentData } from '../data-serivce.service';
@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.less']
})
export class CardInformationComponent implements OnInit {

  @Input() currCardTitle: string;
  @Input() currCardDesc: string;
  @Input() currCardUserComment: string;

  comment: string;
  status: string;
  showStatus: boolean;
  constructor(private dataSrvc: DataSerivceService) { 
    this.comment = "Пример комментария";
    this.showStatus = false;
  }
  //отправить комментарий
  sendComment() {
    const data: commentData = {
      text: this.comment,
      date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} 
            (время: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()})`
    }
    this.dataSrvc.currCard.userComment.push(data);
    data.text === "" ? this.status = "Вы ввели пустой комментарий!" : this.status = "Комментарий отправлен";
    this.showStatus = !this.showStatus;
    this.comment = "";

    setTimeout(()=>{
      this.showStatus = !this.showStatus;
      this.dataSrvc.currCard.showInf = !this.dataSrvc.currCard.showInf;
    }, 1000);
  }
  ngOnInit() {
  }

}
