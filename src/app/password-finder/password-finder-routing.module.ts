import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordFinderComponent } from './password-finder/password-finder.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordFinderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordFinderRoutingModule {}
