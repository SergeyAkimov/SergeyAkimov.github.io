import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataSerivceService } from '../data-serivce.service';

@Component({
  selector: 'app-comments-block',
  templateUrl: './comments-block.component.html',
  styleUrls: ['./comments-block.component.less']
})
export class CommentsBlockComponent implements OnInit {
  showAllComments: boolean;
  @Input() cardComments: string[];
  @Input() commentsShow: boolean;
  @Input() commentDate: any;
  // @Output() commentsShowChange = new EventEmitter<boolean>();

  constructor(private dataSrvc: DataSerivceService) {
    this.showAllComments = true;
  }
  hideComments(): void {
    for(const card of this.dataSrvc.cardsList) {
      card.showCommentsBlock = false;
    }
    // this.commentsShow = !this.commentsShow;
    // this.commentsShowChange.emit(this.commentsShow);
  }

  ngOnInit() {
  }
}
