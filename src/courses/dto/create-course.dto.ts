import { IsString, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly tags: string[];
}
