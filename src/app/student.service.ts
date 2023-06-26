import { Injectable } from '@angular/core';
import { Student } from './student-list/student-list.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      phone: '0504111111',
      active: true,
      gradePointAverage: 85,
      schoolYear: '2'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Elm St',
      phone: '0504112222',
      active: false,
      gradePointAverage: 95,
      schoolYear: '1',
    }, {
      id: 3,
      firstName: 'Robert',
      lastName: 'Johnson',
      address: '789 Oak St',
      phone: '0504113333',
      active: true,
      gradePointAverage: 90,
      schoolYear: '3',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Williams',
      address: '321 Pine St',
      phone: '0504114444',
      active: false,
      gradePointAverage: 87,
      schoolYear: '2',
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Brown',
      address: '654 Cedar St',
      phone: '0504115555',
      active: true,
      gradePointAverage: 92,
      schoolYear: '3',
    },
    {
      id: 6,
      firstName: 'Sophia',
      lastName: 'Jones',
      address: '987 Maple St',
      phone: '0504116666',
      active: true,
      gradePointAverage: 88,
      schoolYear: '1',
    },
    {
      id: 7,
      firstName: 'William',
      lastName: 'Davis',
      address: '741 Birch St',
      phone: '0504117777',
      active: false,
      gradePointAverage: 79,
      schoolYear: '2',
    },
    {
      id: 8,
      firstName: 'Olivia',
      lastName: 'Miller',
      address: '369 Elm St',
      phone: '0504118888',
      active: true,
      gradePointAverage: 93,
      schoolYear: '3',
    },
    {
      id: 9,
      firstName: 'James',
      lastName: 'Wilson',
      address: '258 Oak St',
      phone: '0504119999',
      active: false,
      gradePointAverage: 81,
      schoolYear: '1',
    },
    {
      id: 10,
      firstName: 'Ava',
      lastName: 'Taylor',
      address: '603 Pine St',
      phone: '0504110000',
      active: true,
      gradePointAverage: 90,
      schoolYear: '2',
    }
  ];
  
  constructor() { }

  getStudents(): Promise<Student[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.students);
      }, 1000); // Delay of 1 seconds
    });
  }

  getStudent(studentId: number | undefined): Student  | undefined{
    const student = this.students.find((student) => student.id == studentId);
    return student;
  }
}
