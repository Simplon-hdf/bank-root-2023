import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firsname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email_address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
