import { IsNumber, IsString, IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
@ApiProperty()
@IsString()
@IsNotEmpty()
uuid_client: string;

@ApiProperty()
@IsNumber()
@IsNotEmpty()
id_client: number;

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