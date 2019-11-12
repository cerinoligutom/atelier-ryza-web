import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { LoadingComponent } from './loading/loading.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [InputComponent, LoadingComponent, DropdownComponent, ThemeSwitcherComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent, LoadingComponent, DropdownComponent, ThemeSwitcherComponent],
})
export class SharedModule {}
