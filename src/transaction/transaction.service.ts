import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompteDto } from "src/compte/dto/create-compte.dto";
import {Account, Prisma, Transaction} from "@prisma/client";


async function isExist(id: number) {
    const accountNumber = await this.prisma.account.findOne({
        where: {
            id_account: id
        }
    });
    // check if account exist
    try {
        if (accountNumber) {
            return true;
        }
    } catch (err) {
        console.log(err.log("Account not found"));
        return false;
    }
}

async function isNotNullAndSuperior(amount: number, sum: number) {
    // check if account is positive
    try {
        if (amount > 0 && amount > sum) {
            return true;
        }
    } catch (err) {
        console.log(err.log("amount of account not positive or not authorized"));
        return false;
    }
}

@Injectable()
export class TransactionService {

    constructor(private readonly prisma: PrismaService) {}
  async createDepot(createTransactionDto: CreateTransactionDto, sum: number): Promise<Transaction>{
    const account = await (createTransactionDto.account_id);

      return this.prisma.transaction.create({
        data: {
            amount: sum,
            created_at: new Date(Date.now()),
        }

    });
  }


  createRetrait(createTransactionDto: CreateTransactionDto) {
    isNotNullAndSuperior(// solde du compte, somme);
    // requete avec prisma
  }

  // @ts-ignore
    createVirement(createTransactionDto: CreateTransactionDto) {
    // verif le solde du compte
    isNotNullAndSuperior(// solde du compte, somme);
    // verif le compte de destination existe
    //isExist();

  }



  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
