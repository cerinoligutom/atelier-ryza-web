import { Component, OnInit, Input } from '@angular/core';
import { PasswordResultFragment } from '@ryza/graphql';

@Component({
  selector: 'ryza-password-detail',
  templateUrl: './password-detail.component.html',
  styleUrls: ['./password-detail.component.scss'],
})
export class PasswordDetailComponent implements OnInit {
  @Input() details!: PasswordResultFragment;

  constructor() {}

  ngOnInit() {}
}
