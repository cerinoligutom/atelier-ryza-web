import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordFinderRoutingModule } from './password-finder-routing.module';
import { PasswordFinderComponent } from './password-finder/password-finder.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordDetailComponent } from './password-detail/password-detail.component';

@NgModule({
  declarations: [PasswordFinderComponent, PasswordDetailComponent],
  imports: [CommonModule, PasswordFinderRoutingModule, SharedModule],
})
export class PasswordFinderModule {}
