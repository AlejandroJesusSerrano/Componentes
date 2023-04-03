import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsFormsComponent } from './students-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from 'src/app/shared/components/form-error-helper/form-error-helper.module';



@NgModule({
  declarations: [
    StudentsFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule
  ],
  exports: [
    StudentsFormsComponent
  ]
})
export class StudentsFormsModule { }
