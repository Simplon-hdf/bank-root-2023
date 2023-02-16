import {IsDate, IsString, IsNotEmpty, IsNumber} from "class-validator";


export class CreateCompteDto {
    
    @IsString()
    @IsNotEmpty()
    uuid_account: string;

    @IsNumber()
    @IsNotEmpty()
    id_account: number;

    @IsNumber()
    @IsNotEmpty()
     admin_id: number;

    @IsNumber()
    @IsNotEmpty()
     account_number: number;
    
    // Client
    @IsNumber()
    @IsNotEmpty()
    id_client: number;

    @IsDate()
    @IsNotEmpty()
    created_at: Date;

    @IsDate()
    @IsNotEmpty()
    updated_at: Date;
}
