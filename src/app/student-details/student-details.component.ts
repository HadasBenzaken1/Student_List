import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student-list/student-list.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})

export class StudentDetailsComponent {
  studentId:any;
  @Input() id: any;
  @Input() student: Student | undefined;
  @Output() saveStudent: EventEmitter<Student> = new EventEmitter<Student>();

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id); 
      this.studentId=id;
      this.getStudentDetails();
      
    });
  }
  
  getStudentDetails() {
    this.student = this.studentService.getStudent(this.studentId);
    console.log(this.student);
}

  studentForm: FormGroup;
  constructor(private fb: FormBuilder,private studentService: StudentService,private route: ActivatedRoute ,private router: Router) {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      schoolYear:[]
    });
  }

  onSave() {
    if (this.studentForm.valid ) {
      console.log(this.studentForm.value);       
      this.saveStudent.emit(this.studentForm.value);
      alert('Student details have been updated successfully');
      this.router.navigate(['/students']);
    } else {
      
    }
  }


}
