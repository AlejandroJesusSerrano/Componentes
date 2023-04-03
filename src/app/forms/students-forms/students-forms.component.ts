import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-students-forms',
  templateUrl: './students-forms.component.html',
  styleUrls: ['./students-forms.component.scss']
})

export class StudentsFormsComponent {

  studentsForm: FormGroup;

  nameControl = new FormControl('Nombre');
  lastNameControl = new FormControl('Apellido');
  emailControl = new FormControl('alguien@example')
  passwordControl = new FormControl('No uses 1234');
  courseControl = new FormControl('');
  hAddressControl = new FormControl('que te importa 123');
  wAddressControl = new FormControl('hoallaalla');
  cityControl = new FormControl('asdfasdf');
  neighControl = new FormControl('asdfasdf');
  zipControl = new FormControl('12313');


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
  }

}
