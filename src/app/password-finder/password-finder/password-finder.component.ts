import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetByItemNameGQL, GetByPasswordGQL, GetByItemNameQuery, PasswordResultFragment } from '@ryza/graphql';
import { SubSink } from 'subsink';
import { map, debounceTime, switchMap, finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchType } from '@ryza/core/enums';

interface ISearchForm {
  searchInput: string;
  levelLimit: number;
  searchType: SearchType;
}

@Component({
  selector: 'ryza-password-finder',
  templateUrl: './password-finder.component.html',
  styleUrls: ['./password-finder.component.scss'],
})
export class PasswordFinderComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  results!: PasswordResultFragment[];
  searchTypes: string[] = Object.values(SearchType);
  form!: FormGroup;
  isFetching = false;

  page = 1;
  pageSize = 50;

  constructor(private fb: FormBuilder, private getByItemNameGQL: GetByItemNameGQL, private getByPasswordGQL: GetByPasswordGQL) {}

  get pageStart() {
    return (this.page - 1) * this.pageSize;
  }

  get pageEnd() {
    let pageEnd = this.pageSize * this.page;
    pageEnd = pageEnd >= this.results.length ? this.results.length : pageEnd;
    return pageEnd;
  }

  get canPaginateForward() {
    return this.pageEnd < this.results.length;
  }

  get canPaginateBackwards() {
    return this.pageStart !== 0;
  }

  initForm() {
    this.form = this.fb.group({
      searchInput: ['dunkelheit', [Validators.required, Validators.minLength(2)]],
      levelLimit: [100, [Validators.required, Validators.min(1), Validators.max(100)]],
      searchType: [SearchType.ITEM_NAME, [Validators.required]],
    });
  }

  setFormState() {
    this.subs.sink = this.form.valueChanges
      .pipe(
        debounceTime<ISearchForm>(500),
        switchMap(form => {
          const { levelLimit, searchType } = form;
          let { searchInput } = form;
          searchInput = searchInput ? searchInput.trim() : '';

          if (this.form.invalid) {
            return [];
          }

          this.isFetching = true;

          switch (searchType) {
            case SearchType.ITEM_NAME:
              return this.fetchPasswordsByItemName(searchInput, levelLimit);

            case SearchType.PASSWORD:
              return this.fetchPasswordsByPassword(searchInput, levelLimit);

            default:
              return this.fetchPasswordsByItemName(searchInput, levelLimit);
          }
        }),
      )
      .subscribe(results => {
        this.results = results;
        this.isFetching = false;

        // Reset page
        this.page = 1;
      });
  }

  ngOnInit() {
    this.initForm();
    this.setFormState();

    // TODO: Temporary
    this.form.updateValueAndValidity();
  }

  fetchPasswordsByItemName(itemName: string, levelLimit: number) {
    return this.getByItemNameGQL
      .fetch({
        input: itemName,
        levelLimit,
      })
      .pipe(map(x => x.data.itemName));
  }

  fetchPasswordsByPassword(password: string, levelLimit: number) {
    return this.getByPasswordGQL
      .fetch({
        input: password,
        levelLimit,
      })
      .pipe(map(x => x.data.password));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
