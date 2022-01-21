import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/modules/sidebar/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarInsertedSubscription: Subscription | undefined;

  @Input() title = 'Sidebar';

  @Input() maxSize: number = 20;
  @Input() values: string[] = [];

  @Output() valueClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarInsertedSubscription = this.sidebarService.inserted$()
      .subscribe(value => {
        const index = this.values
          .map(v => v.toLowerCase())
          .indexOf(value.toLowerCase());
        if (index > -1)
          this.values.splice(index, 1);

        this.values.push(value);

        this.sidebarService.changeValues(this.values)
      });
  }

  clickValue(value: string) {
    this.sidebarService.click(value);
    this.valueClick.emit(value);
  }

  ngOnDestroy() {
    this.sidebarInsertedSubscription?.unsubscribe();
  }
}
