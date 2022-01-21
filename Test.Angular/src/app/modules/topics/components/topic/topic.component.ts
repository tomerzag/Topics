import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/dtos/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() markText: string | undefined;
  @Input() relatedTopic: Topic | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
