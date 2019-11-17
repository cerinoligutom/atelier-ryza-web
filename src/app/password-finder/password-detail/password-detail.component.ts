import { Component, OnInit, Input } from '@angular/core';
import { PasswordResultFragment, EnemyBossType } from '@ryza/graphql';
import { IPasswordDetailViewModel } from '@ryza/core/interfaces';

@Component({
  selector: 'ryza-password-detail',
  templateUrl: './password-detail.component.html',
  styleUrls: ['./password-detail.component.scss'],
})
export class PasswordDetailComponent implements OnInit {
  @Input() details!: PasswordResultFragment & IPasswordDetailViewModel;

  constructor() {}

  ngOnInit() {}

  handleBossType(bossType: EnemyBossType) {
    let formattedBossType = '';

    if (bossType !== EnemyBossType.Regular) {
      formattedBossType = `(${bossType})`;
    }

    return formattedBossType;
  }

  get isRegularBoss() {
    return this.details.boss && this.details.boss.type === EnemyBossType.Regular;
  }
}
