import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSedeDto {
  @IsString()
  @IsNotEmpty()
  IdIngCou: string;

  @IsString()
  @IsNotEmpty()
  Item: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsString()
  @IsNotEmpty()
  Detail: string;

  @IsString()
  @IsNotEmpty()
  LogUsu: string;


  @IsString()
  @IsNotEmpty()
  ChkCert: Number;

}
