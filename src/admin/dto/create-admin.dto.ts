import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateAdminDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    uuid_admin: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id_admin: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email_address: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;   
}

