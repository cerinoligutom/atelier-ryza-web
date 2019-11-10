import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ryza-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() labelFor!: string;
  @Input() placeholder!: string;
  // tslint:disable-next-line: no-any
  @Input() options!: any[];

  constructor() {}

  ngOnInit() {}
}
