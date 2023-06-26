
import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  active: boolean;
  gradePointAverage: number;
  schoolYear:string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentsListComponent implements OnInit{
  studentsList!: Student[];

  selectedStudent: any; 
  
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().then((students) => {
      this.studentsList = students;
    });
  }

  deleteStudent(student: Student) {
    const index = this.studentsList.indexOf(student);
    if (confirm("Are you sure you want to delete " + student.firstName +' '+student.lastName+ "?")) {
      if (index !== -1) {
        this.studentsList.splice(index, 1);
      }
    } else {
    }
  };
  
}

