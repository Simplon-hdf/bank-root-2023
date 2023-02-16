import { IsDate, IsString, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCompteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  uuid_account: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id_account: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  admin_id: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  account_number: number;

  // Client
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id_client: number;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}
