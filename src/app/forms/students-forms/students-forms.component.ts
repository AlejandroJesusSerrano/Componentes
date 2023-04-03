import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-students-forms',
  templateUrl: './students-forms.component.html',
  styleUrls: ['./students-forms.component.scss']
})

export class StudentsFormsComponent {

  students: any [] = [];

  studentsForm: FormGroup;

  nameControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.required,
  ]);

  lastNameControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.required,
  ]);

  emailControl = new FormControl('', [
    Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-_]+\\.[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})?'),
    Validators.required,
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    this.passwordRestriction()
  ]);

  courseControl = new FormControl('', [
    Validators.required,
  ]);

  hAddressControl = new FormControl('', [
    Validators.required,
  ]);

  wAddressControl = new FormControl('');

  cityControl = new FormControl('', [
    Validators.required,
  ]);

  neighControl = new FormControl('', [
    Validators.required,
  ]);

  zipControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public FormBuilder: FormBuilder){

    this.studentsForm = new FormGroup({
      name: this.nameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      password: this.passwordControl,
      course: this.courseControl,

      location: this.FormBuilder.group({
        homeAddress: this.hAddressControl,
        workAddress: this.wAddressControl,
        city: this.cityControl,
        neighborhood :this.neighControl,
        zip: this.zipControl,
      }),

    });
  };

  onSubmit(): void{

    if (this.studentsForm.valid) {
      console.log(this.studentsForm)
      this.students.push(this.studentsForm.value)
      this.studentsForm.reset()
    } else {
      alert('El formulario no es válido')
    }
    console.log(this.studentsForm.value)
  };

  passwordRestriction(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*+?&\-])[A-Za-z\d@$!%*?&+\-]{6,14}$/;
      const valid = passwordRegex.test(control.value);
      
      return valid? null : {passwordFormat: true};
    }
  };
};
