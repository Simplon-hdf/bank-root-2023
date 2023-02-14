import {Admin, Client, Transaction} from "@prisma/client";
import {IsDate} from "class-validator";

const { String } = require('class-validator' );

export class CreateCompteDto {
    @String()
    private idAccount: string;
    @String()
    private idAdmin: string;
    @String()
    private ccountNumber: string;
    // Client
    @String()
    private idClient: string;
    @IsDate()
    private createdAt: Date;
    @IsDate()
    private updatedAt: Date;

    private client: Client;

    private admin: Admin;

    private transactions: Transaction[];
    ``
}
