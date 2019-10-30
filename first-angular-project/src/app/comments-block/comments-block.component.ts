import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-block',
  templateUrl: './comments-block.component.html',
  styleUrls: ['./comments-block.component.less']
})
export class CommentsBlockComponent implements OnInit {

  @Input() cardComments: string[];

  constructor() {
    
   }

  ngOnInit() {
  }
}
