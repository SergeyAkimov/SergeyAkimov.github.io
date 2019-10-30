import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.less']
})
export class CardInformationComponent implements OnInit {

  @Input() currCardTitle: string;
  @Input() currCardDesc: string;
  @Input() currCardUserComment: string;
  @Output() totalMessage = new EventEmitter<String>();
  comment: string;
  status: string;
  showStatus: boolean;
  constructor() { 
    this.comment = "Пример комментария";
    this.showStatus = false;
  }
  sendComment() {
    this.totalMessage.emit(this.comment);

    if(this.comment === "") {
      this.status = "Вы ввели пустой комментарий!";
    } else {
      this.status = "Комментарий отправлен";
    }
    this.showStatus = !this.showStatus;
    this.comment = "";

    setTimeout(()=>{
      this.showStatus = !this.showStatus;
    }, 1000);
  }
  ngOnInit() {
  }

}
