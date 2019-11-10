import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { LoadingComponent } from './loading/loading.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [InputComponent, LoadingComponent, DropdownComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent, LoadingComponent, DropdownComponent],
})
export class SharedModule {}
