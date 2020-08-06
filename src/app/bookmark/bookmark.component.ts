import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent {

  constructor() { }
  @Input() isbookmarked: boolean;
  @Output() change = new EventEmitter();

  bookmark: boolean;

  changeBookmark() {
    if (this.bookmark) {
      this.bookmark = !this.bookmark
    }
    else {
      this.bookmark = true;
    }
    this.change.emit({ newValue: this.bookmark });
  }
}