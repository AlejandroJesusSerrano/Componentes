import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent{
  public students: Student[] = [
    new Student(1, 'Alejandro', 'Serrano', 'alejserrano@gmail.com', 'PROFAMAG', 7, true, false, 38, new Date('1984-04-16')),
    new Student(2, 'Agustin', 'Ryan', 'agus.ryan@gmail.com', 'Ley Yolanda', 7, true, true, 28, new Date('1995-04-29')),
    new Student(3, 'Ichigo', 'Kurozaky', 'ichigo@gmail.com', 'Formacion en Genero', 2, false, false, 19, new Date('2005-03-16')),
    new Student(4, 'Jose Luis', 'Ferretti', 'redshark@gmail.com', 'Formacion en Genero', 10, true, true, 56, new Date('1967-12-9')),
  ]

}
