import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetByItemNameGQL, GetByPasswordGQL, GetByItemNameQuery } from '@ryza/graphql';
import { SubSink } from 'subsink';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ryza-password-finder',
  templateUrl: './password-finder.component.html',
  styleUrls: ['./password-finder.component.scss'],
})
export class PasswordFinderComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  results!: GetByItemNameQuery['itemName'];

  constructor(private getByItemNameGQL: GetByItemNameGQL) {}

  ngOnInit() {
    this.fetchPasswordsByItemName('puniball', 100);
  }

  fetchPasswordsByItemName(itemName: string, levelLimit: number) {
    this.subs.sink = this.getByItemNameGQL
      .fetch({
        input: itemName,
        levelLimit,
      })
      .pipe(map(x => x.data.itemName))
      .subscribe(results => {
        this.results = results;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
