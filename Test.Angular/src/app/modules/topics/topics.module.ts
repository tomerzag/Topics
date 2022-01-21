import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './components/topic/topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { HighlightDirective } from 'src/app/core/directives/highlight/highlight.directive';



@NgModule({
  declarations: [
    TopicComponent,
    TopicListComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [TopicListComponent]
})
export class TopicsModule { }
