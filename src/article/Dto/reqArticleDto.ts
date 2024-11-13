import {
  IsString,
  IsOptional,
  IsDate,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class reqArticleDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsDate()
  @IsOptional()
  created_at?: Date;

  @IsDate()
  @IsOptional()
  updated_at?: Date;
}
