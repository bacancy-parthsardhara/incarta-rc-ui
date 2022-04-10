import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDropdownComponent } from './common-dropdown/common-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonDropdownComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
