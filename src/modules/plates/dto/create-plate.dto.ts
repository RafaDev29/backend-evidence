import { IsString, IsNotEmpty } from 'class-validator';
export class CreatePlateDto {

    @IsString()
    @IsNotEmpty()
    InIngCou: string;
  
    @IsString()
    @IsNotEmpty()
    NumVez: number;
  
    @IsString()
    @IsNotEmpty()
    PlaVeh: string;  
}





