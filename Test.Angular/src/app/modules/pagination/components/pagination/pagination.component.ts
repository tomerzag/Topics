import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 20;
  @Input() length: number = 0;

  pages: number[] = [];

  @Output() selectPage: EventEmitter<number> = new EventEmitter<number>();;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // pages
    if (changes['length'] && (changes['length'].currentValue || changes['length'].currentValue === 0)) {
      this.pages = Array.from({
        length: Math.ceil(changes['length'].currentValue / this.pageSize)
      }, (_, i) => i + 1);
    }
  }

  pageSelected(page: number) {
    this.pageNumber = page;
    this.selectPage.emit(page);
  }
}
