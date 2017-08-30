import { Component } from '@angular/core';
import { InfiniteCalendarComponent, InfiniteCalendarEvent, ExtDateWithEvent } from 'ng-infinite-calendar';
import { ExtDate } from 'extdate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events: InfiniteCalendarEvent[] = [
    {
      title: '1st release day!',
      body: 'the first release day of ng-infinite-calendar!',
      beginAt: (new ExtDate(2017, 8, 29, 0, 0, 0)),
      endAt: (new ExtDate(2017, 8, 29, 3, 0, 0)),
      data: {},
    },
    {
      title: 'sample event',
      body: 'body of sample event',
      beginAt: (new ExtDate()),
      endAt: (new ExtDate()).nextDay(),
      data: {},
    },
    {
      title: 'long event',
      body: 'body of long event',
      beginAt: (new ExtDate()).nextDay(2),
      endAt: (new ExtDate()).nextWeek(),
      data: { foo: 'bar', message: 'you can add any data by key "data"' },
    },
    {
      title: 'very long event',
      body: 'body of very long event',
      beginAt: (new ExtDate()).beginningOfMonth(),
      endAt: (new ExtDate()).endOfMonth().nextHour(),
      data: {},
    },
  ]

  selected: ExtDateWithEvent;

  onSelectDate(edwe: ExtDateWithEvent) {
    this.selected = edwe;
  }
}
