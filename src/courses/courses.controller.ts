import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('catalog')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('list')
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('list:id')
  findById(@Param('id') id: string) {
    return this.coursesService.findById(id);
  }

  @Post('create')
  create(@Body() createCourse: CreateCourseDto) {
    return this.coursesService.create(createCourse);
  }

  @Patch('list:id')
  update(@Param('id') id: string, @Body() updateCourse: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourse);
  }

  @Delete('list:id')
  delete(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
