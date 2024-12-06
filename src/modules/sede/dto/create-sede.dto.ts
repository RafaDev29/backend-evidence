import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSedeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
