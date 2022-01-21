import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Topic } from 'src/app/dtos/topic';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  @Input() markText: string | undefined;
  @Input() relatedTopics: Topic[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
