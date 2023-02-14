import { Client } from "@prisma/client";
import {IsNumber, IsString} from "class-validator"

export class CreateUserDto {
@IsNumber()    
private idClient: number;
@IsString()
private lastName: string;
@IsString()
private firstName: string;
@IsString()
private emailAddress: string;
@IsString()
private password: string;

}
