import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  uuid_transaction: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id_transaction: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  account_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}
