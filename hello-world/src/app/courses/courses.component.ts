import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  ngOnInit(): void {
  }

  title:string = "List of Courses";
  courses:string[];

  constructor(service: CoursesService) { // service is the parameter; CoursesServices is the class imported from the courses.service.ts file
    this.courses = service.getCourses(); // this.courses (courses is defined above in this file) = service.getCourses()   (service (parameter) . getCourses() (pulled from the courses.service.ts file in the CoursesService service))
  };

}
