import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsFormsComponent } from './students-forms.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentsFormsComponent
  ]
})
export class StudentsFormsModule { }
