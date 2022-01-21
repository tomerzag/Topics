import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { TopicsService } from 'src/app/core/services/topics/topics.service';
import { Topic } from 'src/app/dtos/topic';
import { SidebarService } from 'src/app/modules/sidebar/services/sidebar/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sidebarClickedSubscription: Subscription | undefined;
  sidebarValuesChangedSubscription: Subscription | undefined;

  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 10;

  relatedTopics: Topic[] | undefined;

  query: string | undefined;

  searchHistory: string[] = localStorage.getItem('search-history') ?
    JSON.parse(localStorage.getItem('search-history')!) :
    [];

  constructor(private topicsService: TopicsService,
    private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarClickedSubscription = this.sidebarService.clicked$()
      .subscribe(value => {
        this.searchRelatedTopics(value);
      });

    this.sidebarValuesChangedSubscription = this.sidebarService.valuesChanged$()
      .subscribe(values => {
        localStorage.setItem('search-history', JSON.stringify(values));
      })
  }

  searchRelatedTopics(query: string) {
    this.pageNumber = 1;

    this.query = query;
    this.sidebarService.insert(query);
    this.topicsService.searchRelatedTopic(query).subscribe(relatedTopics => {
      this.relatedTopics = relatedTopics;
    });
  }

  onSelectPage(page: number) {
    this.pageNumber = page;
  }

  ngOnDestroy() {
    this.sidebarClickedSubscription?.unsubscribe();
    this.sidebarValuesChangedSubscription?.unsubscribe();
  }
}
