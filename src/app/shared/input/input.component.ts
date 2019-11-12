import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ryza-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl;
  @Input() labelFor!: string;
  @Input() type!: string;
  @Input() placeholder!: string;

  constructor() {}

  get hasValue() {
    return !!this.control.value;
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
