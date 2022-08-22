import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fudamentos NestJS',
      description: 'Curso de fudamentos do NestJS',
      price: 100,
      tags: ['NestJS', 'TypeScript', 'JavaScript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findById(id: string) {
    const courseResult = this.courses.find(
      (course) => course.id === Number(id),
    );

    if (!courseResult) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }

    return courseResult;
  }

  create(course) {
    this.courses.push(course);
  }

  update(id: string, course) {
    const indexOfCourse = this.courses.findIndex(
      (courseFindIndex) => courseFindIndex.id === Number(id),
    );
    this.courses[indexOfCourse] = course;
  }

  remove(id: string) {
    const indexOfCourse = this.courses.findIndex(
      (courseFindIndex) => courseFindIndex.id === Number(id),
    );
    if (indexOfCourse !== -1) {
      this.courses.splice(indexOfCourse, 1);
    }
  }
}
