import { Component, OnInit, ViewChild } from '@angular/core';
import { emojiRandom } from '../emojis';
import * as faker from 'faker';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  people;

  constructor() { }

  ngOnInit() {
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase(),
          emoji: emojiRandom()
        };
      });
  }

}
