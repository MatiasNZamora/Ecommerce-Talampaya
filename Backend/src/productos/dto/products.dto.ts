import { IsString, IsNotEmpty, MinLength, IsOctal, IsNumber } from 'class-validator';

export class productDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string;

    @IsNumber()
    @IsNotEmpty()
    precio:number;
    
    @IsNumber()
    @IsNotEmpty()
    stock:number;

    @IsString()
    @IsNotEmpty()
    origen:string;

    @IsString()
    @IsNotEmpty()
    image: string;

};

export class UpdateProductDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    nombre?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    precio?:number;
    
    @IsNumber()
    @IsNotEmpty()
    stock?:number;

    @IsString()
    @IsNotEmpty()
    origen?:string;

    @IsString()
    @IsNotEmpty()
    @IsOctal()
    image?: string;
    
};